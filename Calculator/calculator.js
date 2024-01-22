// all done hai bus jo kha hai osse kr do fir rakesh ko bol dena wo sheet update kr dega.

function clrscr()
  {
    document.getElementById("input").value = ""; //for input
    document.getElementById("output").value = ""; //for output
  }

function backspace() 
  {
    
    var string = document.getElementById("input").value;
    string = string.slice(0, -1);
    document.getElementById("input").value = string;
    document.getElementById("output").value = ' ';
    // document.getElementById("output").value = string;      // This for showing previous input in output box
  }

function myfnc(v)
  {
    document.getElementById("input").value += v;
    
  }

function operator(a) 
  {
    if (document.getElementById("input").value == "" || document.getElementById("input").value == null)
      {
        if(a=='.')
        {
          document.getElementById("input").value += a;
        }
       return false;
      }
    else 
      {
        let string = document.getElementById("input").value;
        if ( string.endsWith("-") ||string.endsWith("+") || string.endsWith("*") || string.endsWith("/") || string.endsWith("%"))
          {  
                let slicer = string.slice(0, -1);
                document.getElementById("input").value = slicer.concat(a);
          } 
            else
              {
               document.getElementById("input").value += a;
              }
        }
    }

function res() 
  {
    let w = document.getElementById("input").value;
    if (w == null || w == "") 
      {
        document.getElementById("output").value = "";
      }
        else if (w.endsWith("/") || w.endsWith("*") || w.endsWith("-") ||w.endsWith("+") ||w.endsWith("..")|| w.endsWith("%")) 
          {
            document.getElementById("output").value = "Expression Error";
          } 
      else 
          {
            
              let k='*'+.01+'*';
              w=w.replace("%",k);
              document.getElementById("output").value = eval(w);
          
        //  document.getElementById("output").value = eval(w);
        }
}
