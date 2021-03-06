from expr.ExprListener import ExprListener
from expr.ExprParser import ExprParser


# Add a listener to report values found
class EvalListener(ExprListener):
    def __init__(self):
        self.theStack = []  # Execution stack
        self.map = {}  # Variable map

    # override default listener behavior
    def exitId(self, ctx):
        # LOGGER.info( "Exiting Id" );
        var_id = ctx.ID().getText()
        # LOGGER.info( "  Pushing value of " + var_id + " to stack" );
        if var_id in self.map:
            self.theStack.append(self.map[var_id])

    def exitAssign(self, ctx):
        self.map[ctx.ID().getText()] = self.theStack.pop()

    def exitInt(self, ctx):
        # LOGGER.info( "Exiting Int" );
        self.theStack.append(int(ctx.INT().getText()))

    def exitPrint(self, ctx):
        # LOGGER.info( "Exiting Print" );
        if not (len(self.theStack) < 1):
            print self.theStack.pop()

    def exitClear(self, ctx):
        # LOGGER.info("Exiting Clear");
        self.theStack = []
        self.map = {}

    def exitAddSub(self, ctx):
        # LOGGER.info( "Exiting AddSub" );
        b = self.theStack.pop()
        a = self.theStack.pop()
        if ctx.op.type == ExprParser.ADD:
            result = a + b
        else:
            result = a - b
        self.theStack.append(result)

    def exitMulDiv(self, ctx):
        # LOGGER.info( "Exiting MulDiv" );
        b = self.theStack.pop()
        a = self.theStack.pop()
        if ctx.op.type == ExprParser.MUL:
            result = a * b
        else:
            result = a / b  # Integer divisiion?
        self.theStack.append(result)
