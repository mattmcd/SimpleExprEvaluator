import java.util.Stack;
import java.util.Map;
import java.util.HashMap;

public class EvalListener extends ExprBaseListener {
  private boolean isAssign;
  private Stack<Integer> theStack = new Stack<Integer>(); 
  private Map<String,Integer> map = new HashMap<String,Integer>();

	@Override public void exitId(ExprParser.IdContext ctx) { 
    if (!isAssign) {
      theStack.push( map.get( ctx.ID().getText()));
    }
  }

	@Override public void enterAssign(ExprParser.AssignContext ctx) { 
    isAssign = true; 
  }
	@Override public void exitAssign(ExprParser.AssignContext ctx) { 
    map.put( ctx.ID().getText(), theStack.pop());
    isAssign = false;
  }

	@Override 
  public void exitUminus(ExprParser.UminusContext ctx) { 
    theStack.push(-theStack.pop());
  }

	@Override 
  public void exitInt(ExprParser.IntContext ctx) { 
    theStack.push( Integer.parseInt( ctx.INT().getText() ));
  }

	@Override 
  public void exitAddSub(ExprParser.AddSubContext ctx) { 
    int b = theStack.pop();
    int a = theStack.pop();
    int result;
    if (ctx.op.getType() == ExprParser.ADD ) {
      result = a+b;
    } else {
      result = a-b;
    }
    theStack.push( result );
  }

	@Override 
  public void exitPrint(ExprParser.PrintContext ctx) { 
    System.out.println( theStack.pop());
  }

	@Override 
  public void exitMulDiv(ExprParser.MulDivContext ctx) { 
    int b = theStack.pop();
    int a = theStack.pop();
    int result;
    if (ctx.op.getType() == ExprParser.MUL) {
      result = a*b;
    } else {
      result = a/b;
    }
    theStack.push( result );
  }
}
