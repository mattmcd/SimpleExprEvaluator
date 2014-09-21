grammar Expr;

prog: (expr NEWLINE)*;

// ANTLR4 : Left recursion!
// Operator precedence matches order of definition
expr  : '-' expr                // Unary minus
      | expr ('*' | '/' ) expr
      | expr ('+' | '-' ) expr
      | INT
      | ID
      | '(' expr ')'
      ;

INT   : [0-9]+ ;
ID    : [a-z]+ ;
NEWLINE : [\r\n]+;
WS    : [ \t]+ -> skip;
