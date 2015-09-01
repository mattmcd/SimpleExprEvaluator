// Add a listener to report values found
EvalListener = function(outText) {
  ExprListener.ExprListener.call(this); // inherit default listener
  this.theStack = [];  // Execution stack
  this.map = {};       // Variable map
  this.result = ''; // Output 
  return this;
};

// inherit default listener
EvalListener.prototype = Object.create(ExprListener.ExprListener.prototype);
EvalListener.prototype.constructor = EvalListener;

// override default listener behavior
EvalListener.prototype.exitId = function(ctx) {
  //LOGGER.info( "Exiting Id" );
  var id = ctx.ID().getText();
  // LOGGER.info( "  Pushing value of " + id + " to stack" );
  if ( this.map.hasOwnProperty(id) ) {
    this.theStack.push( this.map[id] );
  } else {
    // Variable not declared, push NaN to stack.
    this.theStack.push( NaN );
  }
}

EvalListener.prototype.exitAssign =
function(ctx) {
  this.map[ctx.ID().getText()] = this.theStack.pop();
};

EvalListener.prototype.exitInt = function(ctx) {
  // LOGGER.info( "Exiting Int" );
  this.theStack.push( parseInt( ctx.INT().getText() ));
}

EvalListener.prototype.exitPrint = function( ctx) {
  //LOGGER.info( "Exiting Print" );
  if ( !this.theStack.length < 1 ) {
    this.result += this.theStack.pop() + "\n";
  }
}

EvalListener.prototype.exitClear = function(ctx) {
  // LOGGER.info("Exiting Clear");
  this.theStack = [];
  this.map = {};
}

EvalListener.prototype.exitAddSub = function(ctx) {
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

EvalListener.prototype.exitMulDiv = function(ctx) { 
  // LOGGER.info( "Exiting MulDiv" );
  b = this.theStack.pop();
  a = this.theStack.pop();
  var result;
  if (ctx.op.type == ExprParser.ExprParser.MUL) {
    result = a*b;
  } else {
    result = a/b;
  }
  this.theStack.push( result );
}

exports.EvalListener = EvalListener;
