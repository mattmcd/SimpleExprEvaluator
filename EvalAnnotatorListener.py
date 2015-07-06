from expr.ExprListener import ExprListener
from expr.ExprParser import ExprParser
# Add a listener to report values found
# Annotate the nodes to store intermediate values
class EvalAnnotatorListener(ExprListener):
    def __init__(self):
        self.values = {};   # Map from node to value
        self.map = {};      # Variable map

    def setValue(self, node, val):
        self.values[node] = val

    def getValue(self, node):
        return self.values[node]

    # override default listener behavior
    def exitId(self,ctx) : 
        #LOGGER.info( "Exiting Id" );
        id = ctx.ID().getText();
        # LOGGER.info( "  Pushing value of " + id + " to stack" );
        if ( self.map.has_key(id) ) : 
            self.setValue(ctx, self.map[id]);

    def exitAssign(self, ctx) : 
        self.map[ctx.ID().getText()] = self.getValue(ctx.expr());

    def exitInt(self,ctx) :
        # LOGGER.info( "Exiting Int" );
        self.setValue( ctx, int( ctx.INT().getText() ));

    def exitPrint(self, ctx) :
        #LOGGER.info( "Exiting Print" );
        try:
            print self.getValue(ctx.expr());
        except:
            print 'Value not found'

    def exitClear(self,ctx) :
        # LOGGER.info("Exiting Clear");
        self.value = {};
        self.map = {};

    def exitAddSub(self,ctx) :
        #LOGGER.info( "Exiting AddSub" );
        b = self.getValue(ctx.expr(1));
        a = self.getValue(ctx.expr(0));
        if (ctx.op.type == ExprParser.ADD ) :
            result = a+b;
        else:
            result = a-b;
        self.setValue( ctx, result );

    def exitMulDiv(self,ctx) :
        # LOGGER.info( "Exiting MulDiv" );
        b = self.getValue(ctx.expr(1));
        a = self.getValue(ctx.expr(0));
        if (ctx.op.type == ExprParser.MUL) :
            result = a*b;
        else :
            result = a/b; # Integer divisiion?
        self.setValue( ctx, result );

