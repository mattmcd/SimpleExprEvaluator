import java.util.Stack;
import java.util.Map;
import java.util.HashMap;

public class EvalListener extends ExprBaseListener {
  private Stack<Integer> theStack = new Stack<Integer>(); 
  private Map<String,Integer> map = new HashMap<String,Integer>();

	@Override public void exitId(ExprParser.IdContext ctx) { 
    System.out.println( "Exiting Id" );
    System.out.println( "  Pushing value of " + 
      ctx.ID().getText() + " to stack" );
    theStack.push( map.get( ctx.ID().getText()));
  }

	@Override public void enterAssign(ExprParser.AssignContext ctx) { 
    System.out.println( "Entering Assign" );
  }
	@Override public void exitAssign(ExprParser.AssignContext ctx) { 
    System.out.println( "Exiting Assign" );
    map.put( ctx.ID().getText(), theStack.pop());
  }

	@Override 
  public void exitUminus(ExprParser.UminusContext ctx) { 
    theStack.push(-theStack.pop());
  }

	@Override 
  public void exitInt(ExprParser.IntContext ctx) { 
    System.out.println( "Exiting Int" );
    theStack.push( Integer.parseInt( ctx.INT().getText() ));
  }

	@Override 
  public void exitAddSub(ExprParser.AddSubContext ctx) { 
    System.out.println( "Exiting AddSub" );
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
    System.out.println( "Exiting Print" );
    System.out.println( theStack.pop());
  }

	@Override 
  public void exitMulDiv(ExprParser.MulDivContext ctx) { 
    System.out.println( "Exiting MulDiv" );
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
