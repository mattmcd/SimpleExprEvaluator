grammar Expr;

// Program is a sequence of statements
prog  : stat+;

stat  : expr NEWLINE          #print
      | ID '=' expr NEWLINE   #assign
      | NEWLINE               #blank
      ;

// ANTLR4 : Left recursion!
// Operator precedence matches order of definition
expr  : '-' expr               #uminus // Unary minus
      | expr ('*' | '/' ) expr #MulDiv
      | expr ('+' | '-' ) expr #AddSub
      | INT                    #int     
      | ID                     #id
      | '(' expr ')'           #parens
      ;

INT   : [0-9]+ ;
ID    : [a-z]+ ;
NEWLINE : [\r\n]+;
WS    : [ \t]+ -> skip;
