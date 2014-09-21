all: Expr.class

ExprParser.java: Expr.g4
	antlr4 Expr.g4

Expr.class: ExprParser.java Expr.java EvalListener.java
	javac Expr*.java

generatedFiles = ExprLexer.java ExprParser.java ExprListener.java ExprBaseListener.java 

clean:
	rm -f $(generatedFiles) *.class *.tokens

grun= java org.antlr.v4.runtime.misc.TestRig
test: Expr.class
	$(grun) Expr prog -tokens test.txt
