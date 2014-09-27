grammar Expr;

// Program is a sequence of statements
prog  : stat+;

stat  : expr NEWLINE          #print
      | CLEAR                 #clear
      | ID '=' expr NEWLINE   #assign
      | NEWLINE               #blank
      ;

// ANTLR4 : Left recursion!
// Operator precedence matches order of definition
expr  : '-' expr               #uminus // Unary minus
      | expr op=('*' | '/' ) expr #MulDiv
      | expr op=('+' | '-' ) expr #AddSub
      | INT                    #int     
      | ID                     #id
      | '(' expr ')'           #parens
      ;

MUL   : '*';
DIV   : '/';
ADD   : '+';
SUB   : '-';

// Keywords
CLEAR : 'clear'; 

INT   : [0-9]+ ;
ID    : [a-z]+ ;
NEWLINE : [\r\n]+;
WS    : [ \t]+ -> skip;
