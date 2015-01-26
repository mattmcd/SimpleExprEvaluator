// Generated from Expr.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\16E\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\3\2\3\2\3\3\3\3\3\4\3\4\3\5",
    "\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\6\n\61\n\n",
    "\r\n\16\n\62\3\13\6\13\66\n\13\r\13\16\13\67\3\f\6\f;\n\f\r\f\16\f<",
    "\3\r\6\r@\n\r\r\r\16\rA\3\r\3\r\2\2\16\3\3\5\4\7\5\t\6\13\7\r\b\17\t",
    "\21\n\23\13\25\f\27\r\31\16\3\2\6\3\2\62;\3\2c|\4\2\f\f\17\17\4\2\13",
    "\13\"\"H\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2",
    "\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2",
    "\27\3\2\2\2\2\31\3\2\2\2\3\33\3\2\2\2\5\35\3\2\2\2\7\37\3\2\2\2\t!\3",
    "\2\2\2\13#\3\2\2\2\r%\3\2\2\2\17\'\3\2\2\2\21)\3\2\2\2\23\60\3\2\2\2",
    "\25\65\3\2\2\2\27:\3\2\2\2\31?\3\2\2\2\33\34\7?\2\2\34\4\3\2\2\2\35",
    "\36\7*\2\2\36\6\3\2\2\2\37 \7+\2\2 \b\3\2\2\2!\"\7,\2\2\"\n\3\2\2\2",
    "#$\7\61\2\2$\f\3\2\2\2%&\7-\2\2&\16\3\2\2\2\'(\7/\2\2(\20\3\2\2\2)*",
    "\7e\2\2*+\7n\2\2+,\7g\2\2,-\7c\2\2-.\7t\2\2.\22\3\2\2\2/\61\t\2\2\2",
    "\60/\3\2\2\2\61\62\3\2\2\2\62\60\3\2\2\2\62\63\3\2\2\2\63\24\3\2\2\2",
    "\64\66\t\3\2\2\65\64\3\2\2\2\66\67\3\2\2\2\67\65\3\2\2\2\678\3\2\2\2",
    "8\26\3\2\2\29;\t\4\2\2:9\3\2\2\2;<\3\2\2\2<:\3\2\2\2<=\3\2\2\2=\30\3",
    "\2\2\2>@\t\5\2\2?>\3\2\2\2@A\3\2\2\2A?\3\2\2\2AB\3\2\2\2BC\3\2\2\2C",
    "D\b\r\2\2D\32\3\2\2\2\7\2\62\67<A\3\b\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ExprLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExprLexer.prototype.constructor = ExprLexer;

ExprLexer.EOF = antlr4.Token.EOF;
ExprLexer.T__0 = 1;
ExprLexer.T__1 = 2;
ExprLexer.T__2 = 3;
ExprLexer.MUL = 4;
ExprLexer.DIV = 5;
ExprLexer.ADD = 6;
ExprLexer.SUB = 7;
ExprLexer.CLEAR = 8;
ExprLexer.INT = 9;
ExprLexer.ID = 10;
ExprLexer.NEWLINE = 11;
ExprLexer.WS = 12;


ExprLexer.modeNames = [ "DEFAULT_MODE" ];

ExprLexer.literalNames = [ 'null', "'='", "'('", "')'", "'*'", "'/'", "'+'", 
                           "'-'", "'clear'" ];

ExprLexer.symbolicNames = [ 'null', 'null', 'null', 'null', "MUL", "DIV", 
                            "ADD", "SUB", "CLEAR", "INT", "ID", "NEWLINE", 
                            "WS" ];

ExprLexer.ruleNames = [ "T__0", "T__1", "T__2", "MUL", "DIV", "ADD", "SUB", 
                        "CLEAR", "INT", "ID", "NEWLINE", "WS" ];

ExprLexer.grammarFileName = "Expr.g4";



exports.ExprLexer = ExprLexer;

