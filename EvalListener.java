import java.util.Stack;
import java.util.Map;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;

public class EvalListener extends ExprBaseListener {
  private Stack<Integer> theStack = new Stack<Integer>(); 
  private Map<String,Integer> map = new HashMap<String,Integer>();
  private final static Logger LOGGER = Logger.getLogger(
      EvalListener.class.getName());

  public EvalListener( ) {
    LOGGER.setLevel(Level.SEVERE);
  }

  public void setVerbose( boolean isVerbose ) {
    if ( isVerbose ) LOGGER.setLevel(Level.INFO);
    else LOGGER.setLevel(Level.SEVERE);
  }

  @Override public void exitId(ExprParser.IdContext ctx) { 
    LOGGER.info( "Exiting Id" );
    String id = ctx.ID().getText();
    LOGGER.info( "  Pushing value of " + id + " to stack" );
    if ( map.containsKey(id) ) {
      theStack.push( map.get(id) );
    } else {
      LOGGER.severe(id + " not declared.");
    }
  }

  @Override public void exitClear(ExprParser.ClearContext ctx) {
    LOGGER.info("Exiting Clear");
    theStack.clear();
    theStack.trimToSize();
    map.clear();
  }

  @Override public void enterAssign(ExprParser.AssignContext ctx) { 
    LOGGER.info( "Entering Assign" );
  }
  @Override public void exitAssign(ExprParser.AssignContext ctx) { 
    LOGGER.info( "Exiting Assign" );
    map.put( ctx.ID().getText(), theStack.pop());
  }

  @Override 
    public void exitUminus(ExprParser.UminusContext ctx) { 
      theStack.push(-theStack.pop());
    }

  @Override 
    public void exitInt(ExprParser.IntContext ctx) { 
      LOGGER.info( "Exiting Int" );
      theStack.push( Integer.parseInt( ctx.INT().getText() ));
    }

  @Override 
    public void exitAddSub(ExprParser.AddSubContext ctx) { 
      LOGGER.info( "Exiting AddSub" );
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
      LOGGER.info( "Exiting Print" );
      if ( !theStack.empty() ) {
        System.out.println( theStack.pop());
      }
    }

  @Override 
    public void exitMulDiv(ExprParser.MulDivContext ctx) { 
      LOGGER.info( "Exiting MulDiv" );
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
