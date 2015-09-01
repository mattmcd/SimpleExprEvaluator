SimpleExprEvaluator
===================
Expression evaluator based on the example in Chapter 4 of 'The Definitive ANTLR 4 Reference'
by Terence Parr.  This uses a Listener for the evaluation whereas the text example in Chapter 4
uses a Visitor.  Chapter 7 goes into more detail on different approaches to
share information between listener event methods, including the stack based
approach used here.

The ANTLR 4.5 release (January 2015) has runtime targets for JavaScript and Python.  
The EvalListener.js and EvalListener.py replicate the stack based
Evaluator.java using these runtimes.  EvalAnnotatorListener.py in contrast
uses node annotation to construct the result.

[Online
demo](http://www.matt-mcdonnell.com/code/SimpleExprEvaluator/index.html)
