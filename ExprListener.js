// Generated from Expr.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#prog.
ExprListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by ExprParser#prog.
ExprListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by ExprParser#print.
ExprListener.prototype.enterPrint = function(ctx) {
};

// Exit a parse tree produced by ExprParser#print.
ExprListener.prototype.exitPrint = function(ctx) {
};


// Enter a parse tree produced by ExprParser#clear.
ExprListener.prototype.enterClear = function(ctx) {
};

// Exit a parse tree produced by ExprParser#clear.
ExprListener.prototype.exitClear = function(ctx) {
};


// Enter a parse tree produced by ExprParser#assign.
ExprListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by ExprParser#assign.
ExprListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by ExprParser#blank.
ExprListener.prototype.enterBlank = function(ctx) {
};

// Exit a parse tree produced by ExprParser#blank.
ExprListener.prototype.exitBlank = function(ctx) {
};


// Enter a parse tree produced by ExprParser#id.
ExprListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by ExprParser#id.
ExprListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by ExprParser#uminus.
ExprListener.prototype.enterUminus = function(ctx) {
};

// Exit a parse tree produced by ExprParser#uminus.
ExprListener.prototype.exitUminus = function(ctx) {
};


// Enter a parse tree produced by ExprParser#int.
ExprListener.prototype.enterInt = function(ctx) {
};

// Exit a parse tree produced by ExprParser#int.
ExprListener.prototype.exitInt = function(ctx) {
};


// Enter a parse tree produced by ExprParser#AddSub.
ExprListener.prototype.enterAddSub = function(ctx) {
};

// Exit a parse tree produced by ExprParser#AddSub.
ExprListener.prototype.exitAddSub = function(ctx) {
};


// Enter a parse tree produced by ExprParser#parens.
ExprListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by ExprParser#parens.
ExprListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by ExprParser#MulDiv.
ExprListener.prototype.enterMulDiv = function(ctx) {
};

// Exit a parse tree produced by ExprParser#MulDiv.
ExprListener.prototype.exitMulDiv = function(ctx) {
};



exports.ExprListener = ExprListener;