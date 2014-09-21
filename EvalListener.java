import java.util.Stack;

public class EvalListener extends ExprBaseListener {
  private boolean isAssign;
  private Stack<Integer> theStack = new Stack<Integer>(); 

	@Override public void enterId(ExprParser.IdContext ctx) { }
	@Override public void exitId(ExprParser.IdContext ctx) { }

	@Override public void enterAssign(ExprParser.AssignContext ctx) { isAssign = true; }
	@Override public void exitAssign(ExprParser.AssignContext ctx) { isAssign = false; }

	@Override public void enterProg(ExprParser.ProgContext ctx) { }
	@Override public void exitProg(ExprParser.ProgContext ctx) { }

	@Override public void exitUminus(ExprParser.UminusContext ctx) { 
    theStack.push(-theStack.pop());
    System.out.println( "Pushed " + theStack.peek());
  }

	@Override public void exitInt(ExprParser.IntContext ctx) 
  { 
    theStack.push( Integer.parseInt( ctx.INT().getText() ));
    System.out.println( "Pushed " + theStack.peek());
  }

	@Override public void exitAddSub(ExprParser.AddSubContext ctx) 
  { 
    int b = theStack.pop();
    int a = theStack.pop();
    int result;
    if (ctx.op.getType() == ExprParser.ADD ) {
      result = a+b;
    } else {
      result = a-b;
    }
    theStack.push( result );
    System.out.println( "Pushed " + theStack.peek());
  }

	@Override public void exitPrint(ExprParser.PrintContext ctx) 
  { 
    System.out.println( theStack.pop());
  }

	@Override public void exitMulDiv(ExprParser.MulDivContext ctx) 
  { 
    int b = theStack.pop();
    int a = theStack.pop();
    int result;
    if (ctx.op.getType() == ExprParser.MUL) {
      result = a*b;
    } else {
      result = a/b;
    }
    theStack.push( result );
    System.out.println( "Pushed " + theStack.peek());
  }
}
