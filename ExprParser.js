// Generated from Expr.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\16\60\4\2\t\2\4\3\t\3\4\4\t\4\3\2\6\2\n\n\2\r\2\16\2\13\3\3\3\3\3",
    "\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\30\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3",
    "\4\3\4\3\4\5\4#\n\4\3\4\3\4\3\4\3\4\3\4\3\4\7\4+\n\4\f\4\16\4.\13\4",
    "\3\4\2\3\6\5\2\4\6\2\4\3\2\6\7\3\2\b\t\65\2\t\3\2\2\2\4\27\3\2\2\2\6",
    "\"\3\2\2\2\b\n\5\4\3\2\t\b\3\2\2\2\n\13\3\2\2\2\13\t\3\2\2\2\13\f\3",
    "\2\2\2\f\3\3\2\2\2\r\16\5\6\4\2\16\17\7\r\2\2\17\30\3\2\2\2\20\30\7",
    "\n\2\2\21\22\7\f\2\2\22\23\7\3\2\2\23\24\5\6\4\2\24\25\7\r\2\2\25\30",
    "\3\2\2\2\26\30\7\r\2\2\27\r\3\2\2\2\27\20\3\2\2\2\27\21\3\2\2\2\27\26",
    "\3\2\2\2\30\5\3\2\2\2\31\32\b\4\1\2\32\33\7\t\2\2\33#\5\6\4\b\34#\7",
    "\13\2\2\35#\7\f\2\2\36\37\7\4\2\2\37 \5\6\4\2 !\7\5\2\2!#\3\2\2\2\"",
    "\31\3\2\2\2\"\34\3\2\2\2\"\35\3\2\2\2\"\36\3\2\2\2#,\3\2\2\2$%\f\7\2",
    "\2%&\t\2\2\2&+\5\6\4\b\'(\f\6\2\2()\t\3\2\2)+\5\6\4\7*$\3\2\2\2*\'\3",
    "\2\2\2+.\3\2\2\2,*\3\2\2\2,-\3\2\2\2-\7\3\2\2\2.,\3\2\2\2\7\13\27\"",
    "*,"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", 
                     "'clear'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', "MUL", "DIV", "ADD", 
                      "SUB", "CLEAR", "INT", "ID", "NEWLINE", "WS" ];

var ruleNames =  [ "prog", "stat", "expr" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.MUL = 4;
ExprParser.DIV = 5;
ExprParser.ADD = 6;
ExprParser.SUB = 7;
ExprParser.CLEAR = 8;
ExprParser.INT = 9;
ExprParser.ID = 10;
ExprParser.NEWLINE = 11;
ExprParser.WS = 12;

ExprParser.RULE_prog = 0;
ExprParser.RULE_stat = 1;
ExprParser.RULE_expr = 2;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitProg(this);
	}
};




ExprParser.ProgContext = ProgContext;

ExprParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.stat();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__1) | (1 << ExprParser.SUB) | (1 << ExprParser.CLEAR) | (1 << ExprParser.INT) | (1 << ExprParser.ID) | (1 << ExprParser.NEWLINE))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;


 
StatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClearContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClearContext.prototype = Object.create(StatContext.prototype);
ClearContext.prototype.constructor = ClearContext;

ExprParser.ClearContext = ClearContext;

ClearContext.prototype.CLEAR = function() {
    return this.getToken(ExprParser.CLEAR, 0);
};
ClearContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterClear(this);
	}
};

ClearContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitClear(this);
	}
};


function AssignContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignContext.prototype = Object.create(StatContext.prototype);
AssignContext.prototype.constructor = AssignContext;

ExprParser.AssignContext = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitAssign(this);
	}
};


function BlankContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(StatContext.prototype);
BlankContext.prototype.constructor = BlankContext;

ExprParser.BlankContext = BlankContext;

BlankContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
BlankContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterBlank(this);
	}
};

BlankContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitBlank(this);
	}
};


function PrintContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintContext.prototype = Object.create(StatContext.prototype);
PrintContext.prototype.constructor = PrintContext;

ExprParser.PrintContext = PrintContext;

PrintContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PrintContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitPrint(this);
	}
};



ExprParser.StatContext = StatContext;

ExprParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ExprParser.RULE_stat);
    try {
        this.state = 21;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.expr(0);
            this.state = 12;
            this.match(ExprParser.NEWLINE);
            break;

        case 2:
            localctx = new ClearContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.match(ExprParser.CLEAR);
            break;

        case 3:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 15;
            this.match(ExprParser.ID);
            this.state = 16;
            this.match(ExprParser.T__0);
            this.state = 17;
            this.expr(0);
            this.state = 18;
            this.match(ExprParser.NEWLINE);
            break;

        case 4:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 20;
            this.match(ExprParser.NEWLINE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IdContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdContext.prototype = Object.create(ExprContext.prototype);
IdContext.prototype.constructor = IdContext;

ExprParser.IdContext = IdContext;

IdContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};
IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitId(this);
	}
};


function UminusContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UminusContext.prototype = Object.create(ExprContext.prototype);
UminusContext.prototype.constructor = UminusContext;

ExprParser.UminusContext = UminusContext;

UminusContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UminusContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterUminus(this);
	}
};

UminusContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitUminus(this);
	}
};


function IntContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(ExprContext.prototype);
IntContext.prototype.constructor = IntContext;

ExprParser.IntContext = IntContext;

IntContext.prototype.INT = function() {
    return this.getToken(ExprParser.INT, 0);
};
IntContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterInt(this);
	}
};

IntContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitInt(this);
	}
};


function AddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExprContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

ExprParser.AddSubContext = AddSubContext;

AddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterAddSub(this);
	}
};

AddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitAddSub(this);
	}
};


function ParensContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(ExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

ExprParser.ParensContext = ParensContext;

ParensContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitParens(this);
	}
};


function MulDivContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExprContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

ExprParser.MulDivContext = MulDivContext;

MulDivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MulDivContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterMulDiv(this);
	}
};

MulDivContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitMulDiv(this);
	}
};



ExprParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        switch(this._input.LA(1)) {
        case ExprParser.SUB:
            localctx = new UminusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 24;
            this.match(ExprParser.SUB);
            this.state = 25;
            this.expr(6);
            break;
        case ExprParser.INT:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 26;
            this.match(ExprParser.INT);
            break;
        case ExprParser.ID:
            localctx = new IdContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 27;
            this.match(ExprParser.ID);
            break;
        case ExprParser.T__1:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 28;
            this.match(ExprParser.T__1);
            this.state = 29;
            this.expr(0);
            this.state = 30;
            this.match(ExprParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 42;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 40;
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 35;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.MUL || _la===ExprParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 36;
                    this.expr(6);
                    break;

                case 2:
                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 37;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 38;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.ADD || _la===ExprParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 39;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 44;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
