var input = "a=1\n"

document.writeln("Input:\n" + input);

var chars = new antlr4.InputStream(input);
var lexer = new ExprLexer.ExprLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExprParser.ExprParser(tokens);
parser.buildParseTrees = true;
var tree = parser.prog();

// Add a listener to report values found
AssignPrinter = function() {
  ExprListener.ExprListener.call(this); // inherit default listener
  this.theStack = [];  // Execution stack
  this.map = {};       // Variable map
  return this;
};

// inherit default listener
AssignPrinter.prototype = Object.create(ExprListener.ExprListener.prototype);
AssignPrinter.prototype.constructor = AssignPrinter;

// override default listener behavior
AssignPrinter.prototype.exitId = function(ctx) {
    //LOGGER.info( "Exiting Id" );
    var id = ctx.ID().getText();
    // LOGGER.info( "  Pushing value of " + id + " to stack" );
    if ( map.containsKey(id) ) {
      theStack.push( map.[id] );
    } else {
      // LOGGER.severe(id + " not declared.");
    }
  }

AssignPrinter.prototype.exitAssign =
function(ctx) {
  document.writeln( "Variable Assignment: " + ctx.ID().getText() );
};

// Actually do the walking
var printer = new AssignPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
