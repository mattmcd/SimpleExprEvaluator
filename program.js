var input = "a=1\na\nclear\na\na=3\na\nb=2+a\nb+a\n"

var inText = document.getElementById("Input");
inText.textContent = input;

var outText = document.getElementById("Output");
outText.value = '';

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
    if ( this.map.hasOwnProperty(id) ) {
      this.theStack.push( this.map[id] );
    } else {
      // LOGGER.severe(id + " not declared.");
    }
  }

AssignPrinter.prototype.exitAssign =
function(ctx) {
  this.map[ctx.ID().getText()] = this.theStack.pop();
};

AssignPrinter.prototype.exitInt = function(ctx) {
      // LOGGER.info( "Exiting Int" );
      this.theStack.push( parseInt( ctx.INT().getText() ));
    }

AssignPrinter.prototype.exitPrint = function( ctx) {
      //LOGGER.info( "Exiting Print" );
      if ( !this.theStack.length < 1 ) {
        outText.value += this.theStack.pop() + "\n";
      }
    }

AssignPrinter.prototype.exitClear = function(ctx) {
    // LOGGER.info("Exiting Clear");
    this.theStack = [];
    this.map = {};
  }

AssignPrinter.prototype.exitAddSub = function(ctx) {
      //LOGGER.info( "Exiting AddSub" );
      var b = this.theStack.pop();
      var a = this.theStack.pop();
      var result;
      if (ctx.op.type == ExprParser.ExprParser.ADD ) {
        result = a+b;
      } else {
        result = a-b;
      }
      this.theStack.push( result );
    }

// Actually do the walking
var printer = new AssignPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
