//validation
function validate(event) {
  var unicode = event.which;
  if (unicode < 48 || unicode > 57) 
  {
    alert("ENTER Number only");
    return false;
  }
    return true;
}

//asc function
function Ascfnc() {
  const fnumber = document.getElementById("num1").value;
  const snumber = document.getElementById("num2").value;
  if (fnumber == "" || fnumber == null ) 
  {
    document.getElementById("result").innerHTML = "ENTER NUMBER IN BOTH FIELDS";
  }

  else if (snumber == "" || snumber == null)
  {
    document.getElementById("result2").innerHTML = "ENTER NUMBER IN BOTH FIELDS";
  }
  else {
    //first input
    document.getElementById("ascbtn").style.display = "none";
    document.getElementById("dscbtn").style.display = "block";
    {
      let text = "";
      for (
        var j = 1;
        j <= 10;
        j++ //loop system
      ) {
        text += fnumber + " x " + j + " = " + fnumber * j + "<br>";
      }
      document.getElementById("result").innerHTML = text;
    }
    //second input
    {
      let Text = "";
      for (var k = 1; k <= 10; k++) 
      {
          Text += snumber + " x " + k + " = " + snumber * k + "<br>";
      }
      document.getElementById("result2").innerHTML = Text;
    }
  }
}

//DESc fnc

function Dscfnc() {
  const fnumber = document.getElementById("num1").value;
  const snumber = document.getElementById("num2").value;
  if (fnumber == "" || fnumber == null ) 
  {
    document.getElementById("result").innerHTML = "ENTER NUMBER IN BOTH FIELDS";
  }

  else if (snumber == "" || snumber == null)
  {
    document.getElementById("result2").innerHTML = "ENTER NUMBER IN BOTH FIELDS";
  }
  else 
  {
    document.getElementById("dscbtn").style.display = "none";
    document.getElementById("ascbtn").style.display = "block";
    {
      //first input
      let text = "";
      for (var i = 10; i > 0; i--) {
        text += fnumber + " x " + i + " = " + fnumber * i + "<br>";
      }
      document.getElementById("result").innerHTML = text;
    }
    //second input
    {
      let Text = "";
      for (var s = 10; s > 0; s--) {
        Text += snumber + " x " + s + " = " + snumber * s + "<br>";
      }
      document.getElementById("result2").innerHTML = Text;
    }
  }
}
