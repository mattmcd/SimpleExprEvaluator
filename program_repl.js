function make_evaluator() {
  var evaluator = new EvalListener.EvalListener();

  function build_tree(str) {
    var chars = new antlr4.InputStream(str);
    var lexer = new ExprLexer.ExprLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ExprParser.ExprParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();
    return tree;
  }

  function evaluate(str){
    tree = build_tree(str);
    // Actually do the walking
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(evaluator, tree);
    var result = evaluator.result;
    evaluator.result = '';
    return result;
  }

  return { evaluate_input : evaluate, 
    usage : function () { 
      str = 
        '| Expression Evaluator \n' +
        '| e.g. a=1 b=2 a+b a*b a/b a-b\n' + 
        '| Expressions must be separated by newlines.\n';
      return str; }
  };
}
