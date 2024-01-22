function clrscr()
  {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
  }

function backspace() 
  {
    var string = document.getElementById("input").value;
    string = string.slice(0, -1);
    document.getElementById("input").value = string;
    document.getElementById("output").value = ' ';
  }

function myfnc(v)
  {
    document.getElementById("input").value += v; 
  }
function operator(a)
  {
        let string = document.getElementById("input").value;
        let lastval=string.at(-1); //+
        if(isNaN(lastval))
          {  
            let reg=/[-*%{/}+]/;
              if(string.match(reg))
              {
              let slicer = string.slice(0, -1); //1+2
              document.getElementById("input").value = slicer.concat(a);
            }
          } 
            else
              {
               document.getElementById("input").value += a;
              }
        }
  

function res() 
  {
    let w = document.getElementById("input").value;
    if (w == null || w == "") 
      {
        document.getElementById("output").value = "";
      }
        else if (w.endsWith("/") || w.endsWith("*") || w.endsWith("-") ||w.endsWith("+") ||w.endsWith("..")|| w.endsWith("%")||w.startsWith("..")) 
          {
            document.getElementById("output").value = "Expression Error";
          } 
      else 
          {
            
              let k='*'+.01+'*';
              w=w.replace("%",k);
              document.getElementById("output").value = eval(w);
        }
}
