import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.FileInputStream;
import java.io.InputStream;

public class Expr {
  public static void main( String[] args) throws Exception 
  {
    String inputFile = null;
    if (args.length>0) inputFile = args[0];
    InputStream is = System.in;
    if (inputFile != null) is = new FileInputStream(inputFile);
    ANTLRInputStream inputStream = new ANTLRInputStream( is );
    ExprLexer lexer = new ExprLexer( inputStream );
    CommonTokenStream tokens = new CommonTokenStream( lexer );
    ExprParser parser = new ExprParser( tokens );
    ParseTree tree = parser.prog();
    ParseTreeWalker walker = new ParseTreeWalker();
    walker.walk( new EvalListener(), tree );
  }
}
