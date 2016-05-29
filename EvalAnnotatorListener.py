from expr.ExprListener import ExprListener
from expr.ExprParser import ExprParser


# Add a listener to report values found
# Annotate the nodes to store intermediate values
class EvalAnnotatorListener(ExprListener):
    def __init__(self):
        self.values = {}  # Map from node to value
        self.map = {}  # Variable map

    def set_value(self, node, val):
        self.values[node] = val

    def get_value(self, node):
        return self.values[node]

    # override default listener behavior
    def exitId(self, ctx):
        # LOGGER.info( "Exiting Id" );
        var_id = ctx.ID().getText()
        # LOGGER.info( "  Pushing value of " + var_id + " to stack" );
        if var_id in self.map:
            self.set_value(ctx, self.map[var_id])

    def exitAssign(self, ctx):
        self.map[ctx.ID().getText()] = self.get_value(ctx.expr())

    def exitInt(self, ctx):
        # LOGGER.info( "Exiting Int" );
        self.set_value(ctx, int(ctx.INT().getText()))

    def exitPrint(self, ctx):
        # LOGGER.info( "Exiting Print" );
        try:
            print self.get_value(ctx.expr())
        except KeyError:
            print 'Value not found'

    def exitClear(self, ctx):
        # LOGGER.info("Exiting Clear");
        self.values = {}
        self.map = {}

    def exitAddSub(self, ctx):
        # LOGGER.info( "Exiting AddSub" );
        b = self.get_value(ctx.expr(1))
        a = self.get_value(ctx.expr(0))
        if ctx.op.type == ExprParser.ADD:
            result = a + b
        else:
            result = a - b
        self.set_value(ctx, result)

    def exitMulDiv(self, ctx):
        # LOGGER.info( "Exiting MulDiv" );
        b = self.get_value(ctx.expr(1))
        a = self.get_value(ctx.expr(0))
        if ctx.op.type == ExprParser.MUL:
            result = a * b
        else:
            result = a / b  # Integer division?
        self.set_value(ctx, result)
