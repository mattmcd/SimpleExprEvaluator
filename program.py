from antlr4 import InputStream, CommonTokenStream, ParseTreeWalker
from expr.ExprLexer import ExprLexer
from expr.ExprParser import ExprParser
from EvalListener import EvalListener


def main():
    in_str = "a=1\na\nclear\na\na=3\na\nb=2+a\nb+a\n"

    chars = InputStream(in_str)
    lexer = ExprLexer(chars)
    tokens = CommonTokenStream(lexer)
    parser = ExprParser(tokens)
    tree = parser.prog()

    # Actually do the walking
    evaluator = EvalListener()
    walker = ParseTreeWalker()
    walker.walk(evaluator, tree)


if __name__ == '__main__':
    main()
