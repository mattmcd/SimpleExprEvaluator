var input = "a=1\na\nclear\na\na=3\na\nb=2+a\nb+a\n"

var inText = document.getElementById("Input");
inText.textContent = input;

var outText = document.getElementById("Output");
outText.value = '';

var chars = new antlr4.InputStream(input);
var lexer = new ExprLexer.ExprLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExprParser.ExprParser(tokens);
parser.buildParseTrees = true;
var tree = parser.prog();

// Actually do the walking
var evaluator = new EvalListener.EvalListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(evaluator, tree);
