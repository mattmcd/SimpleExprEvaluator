all: Expr.class js/ExprParser.js java/ExprParser.java expr/ExprParser.py

js: js/ExprParser.js

python: expr/ExprParser.py

install_python: 
	pip install -r requirements.txt

js/ExprParser.js: Expr.g4
	antlr4 -o js -Dlanguage=JavaScript Expr.g4

java/ExprParser.java: Expr.g4
	antlr4 -o java Expr.g4

expr/ExprParser.py: Expr.g4
	antlr4 -o expr -Dlanguage=Python2 Expr.g4
	touch expr/__init__.py

Expr.class: java/ExprParser.java Expr.java EvalListener.java
	javac java/*.java Expr*.java

generatedFiles = ExprLexer.* ExprParser.* ExprListener.* ExprBaseListener.*

OUTDIRS = java js expr
clean:
	for OUTDIR in $(OUTDIRS); do rm -f $$OUTDIR/* ; done

grun= java -cp java:$$CLASSPATH org.antlr.v4.runtime.misc.TestRig
.PHONY: test
test: 
	$(grun) Expr prog -tokens test.txt

test_python:
	python program.py
	
serve:
	python -m SimpleHTTPServer 8000
