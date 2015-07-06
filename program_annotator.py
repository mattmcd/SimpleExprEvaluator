from antlr4 import *
from expr.ExprLexer import ExprLexer
from expr.ExprParser import ExprParser
from EvalAnnotatorListener import EvalAnnotatorListener as EvalListener

def main(argv):

    input = "a=1\na\nclear\na\na=3\na\nb=2+a\nb+a\n"

    chars = InputStream.InputStream(input);
    lexer = ExprLexer(chars);
    tokens = CommonTokenStream(lexer);
    parser = ExprParser(tokens);
    tree = parser.prog();

    # Actually do the walking
    evaluator = EvalListener();
    walker = ParseTreeWalker();
    walker.walk(evaluator, tree);

if __name__ == '__main__':
    import sys
    main(sys.argv)
