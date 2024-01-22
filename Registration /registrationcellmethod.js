$('#mydate').datepicker({minDate: 0})

var kvalue,output;
//-----------------------------------------------------------------------------date validation-----------------------------------------------------------------
function date() {
  if (document.getElementById("mydate").value == "") {
    document.getElementById("dateval").style.display = "block";
  } else {
    document.getElementById("dateval").style.display = "none";
  }
}

//------------------------------------------------------------------------------NAME VALIDATION-------------------------------------------------------------------------------------
  function namval(nam) {
    let a = nam.which;
    if ((a > 96 && a < 123) || (a > 64 && a < 91) || a == 32) {
      return true;
    }
    return false;
  }
  //name change
  function changename() {
    let name = document
      .getElementById("myname")
      .value.replace(/^\s+|\s+$/gm, "");
    let ename = name.toUpperCase();
    if (document.getElementById("myname").value == "") {
      document.getElementById("nameval").style.display = "block";
    } else {
      document.getElementById("myname").value = ename;
      document.getElementById("nameval").style.display = "none";
    }
  }
//----------------------------------------------------------------------Email validation----------------------------------------------------------------------------------------------
  function valeml() {
    let email = document.getElementById("myemail").value.toUpperCase();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(regex)) {
      document.getElementById("myemail").value = email;
      document.getElementById("emailval").style.display = "none";
    } else {
      document.getElementById("myemail").value = "";
      document.getElementById("emailval").style.display = "block";
    }
  }

//----------------------------------------------------------------------Age validation-----------------------------------------------------------------------------------------------------
function valage() {
  let myage = Number(document.getElementById("myage").value);
  if (Number.isInteger(myage) && myage >= 18 && myage <= 100) {
    document.getElementById("myage").value = myage;
    document.getElementById("ageval").style.display = "none";
  } else {
    document.getElementById("myage").value = "";
    document.getElementById("ageval").style.display = "block";
  }
}
//------------------------------------------------------------------------phone number validation----------------------------------------------------------------------------------------------
function valphn() 
{
  let phone = document.getElementById("mobile").value;
  let contact = Number(document.getElementById("mobile").value);
  if (Number.isInteger(contact) && phone.length == 10) {
    document.getElementById("mobile").value = contact;
    document.getElementById("phnval").style.display = "none";
  } else {
    document.getElementById("mobile").value = "";
    document.getElementById("phnval").style.display = "block";
  }
}
//-------------------------------------------------------------------------------Address validation-----------------------------------------------------------------------------------------------------
  function addresval(add)
  {
    let a = add.which;
    if (
      (a > 96 && a < 123) ||
      (a > 64 && a < 91) ||
      (a > 47 && a < 58) ||
      a == 32 ||
      a == 46 ||
      a == 40 ||
      a == 41
    ) {
      return true;
    }
    return false;
  }

  function addres() 
  {
    let add = document
      .getElementById("address")
      .value.replace(/^\s+|\s+$/gm, "");
    let adrs = add.toUpperCase();
    if (document.getElementById("address").value == "") {
      document.getElementById("addressval").style.display = "block";
    } else {
      document.getElementById("addressval").style.display = "none";
      document.getElementById("address").value = adrs;
    }
  }
//-----------------------------------------------------------------------Submit button------------------------------------------------------------------------------------------------------
function submisson() {
  var male = document.getElementById("Male");
  var female = document.getElementById("Female");
  var kvalue = "";
  if (male.checked == true) {
    kvalue = male.value;
  } else if (female.checked == true) {
    kvalue = female.value;
  }

  //games validattion
  var output = [];
  var checkbox = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkbox.length; i++) {
    output.push(checkbox[i].value);
  }
  if (
    document.getElementById("mydate").value != "" &&
    document.getElementById("myname").value != "" &&
    document.getElementById("myemail").value != "" &&
    document.getElementById("myage").value != "" &&
    document.getElementById("mobile").value != "" &&
    document.getElementById("address").value != "" &&
    document.getElementById("country").value != "" &&
    kvalue != "" &&
    output != ""
  ) 
  {
    ////////loop start fromm here----------------------------------------------------
    let tbody=document.getElementById("tbody");

    ///tbody id

    //data insertioon
    let a = Math.floor(Math.random() * 100) + 1;
    let b = document.getElementById("mydate").value;
    let c = document.getElementById("myname").value;
    let d = document.getElementById("myemail").value;
    let e = document.getElementById("myage").value;
    let f = document.getElementById("mobile").value;
    let g = document.getElementById("address").value;
    let h = document.getElementById("country").value;
    let i = kvalue;
    let j = output.join(", ");
    let k =`<button onclick="Edit()" id="Edit">Edit</button>&nbsp;<button id="Delete" onclick="Delete()">Delete</button>`;
    //================================================
    text="<tr><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td><td>"+e+"</td><td>"+f+"</td><td>"+g+"</td><td>"+h+"</td><td>"+i+"</td><td>"+j+"</td><td>"+k+"</td></tr>";
    tbody.innerHTML += text;
console.log(text);
    //-------------------------------------------------------------Empty code-----------------------------------------------------------------------------
    document.getElementById("form").reset();
  } else {
    //date validation
    if (document.getElementById("mydate").value == "") {
      document.getElementById("dateval").style.display = "block";
    } else {
      document.getElementById("dateval").style.display = "none";
    }

    //name validation
    if (document.getElementById("myname").value == "") {
      document.getElementById("nameval").style.display = "block";
    } else {
      document.getElementById("nameval").style.display = "none";
    }

    //email validation
    if (document.getElementById("myemail").value == "") {
      document.getElementById("emailval").style.display = "block";
    } else {
      // document.getElementById("myemail").style.textTransform = "Capitalize";
      document.getElementById("emailval").style.display = "none";
    }
    //AGE VALIDATION
    if (document.getElementById("myage").value == "") {
      document.getElementById("ageval").style.display = "block";
    } else {
      document.getElementById("ageval").style.display = "none";
    }

    //phone number validation
    if (document.getElementById("mobile").value == "") {
      document.getElementById("phnval").style.display = "block";
    } else {
      document.getElementById("phnval").style.display = "none";
    }
    //address validation
    if (document.getElementById("address").value == "") {
      document.getElementById("addressval").style.display = "block";
    } else {
      document.getElementById("addressval").style.display = "none";
    }

    // country validation
    if (document.getElementById("country").value == "") {
      document.getElementById("country").focus();
    }

    //checkboxes validation
    // if (document.getElementById("mychk").value == "") {
    //   document.getElementById("games").focus();
    // }
    //gender validation
    if (document.getElementsByName("gender").value == "") {
      document.getElementsByName("genders").focus();
    }
  }
}
// //----------------------------------------------------------------------------------Edit Button-----------------------------------//
function Edit() {
  document.getElementById('submitbtn').style.display = "none";

  let tablebody=document.getElementById("tbody"),rowindex;
  for( let i=0;i<tablebody.rows.length;i++)
  {
    tablebody.rows[i].onclick=function()
    {
      rowindex=this.rowIndex;
     
    document.getElementById('myid').value=this.cells[0].innerHTML;
    document.getElementById("mydate").value= this.cells[1].innerHTML;
    document.getElementById("myname").value= this.cells[2].innerHTML;
    document.getElementById("myemail").value= this.cells[3].innerHTML;
    document.getElementById("myage").value= this.cells[4].innerHTML;
    document.getElementById("mobile").value= this.cells[5].innerHTML;
    document.getElementById("address").value= this.cells[6].innerHTML;
    document.getElementById("country").value= this.cells[7].innerHTML;

    let gender=document.querySelectorAll("input[type=radio]");
    for( let j=0;j<gender.length;j++)
    {
      if(gender[j].value==this.cells[8].innerHTML)
      {gender[j].checked=true;}
    }

   let checkbox=document.querySelectorAll("input[type=checkbox]");
   let checks=this.cells[9].innerHTML;
   for(let s=0;s<checkbox.length;s++)
   {
    if(checks.includes(checkbox[s].value))
    {
      checkbox[s].checked=true;
    }
   }
    }
  }
  document.getElementById("updatekar").innerHTML=`<button type="button" onclick="${Update()}" id="updatebtn" >Update</button>`;
  function Update()
  {
    tablebody.rows[rowindex].cells[0].innerHTML=document.getElementById("myid").value;
    tablebody.rows[rowindex].cells[1].innerHTML=document.getElementById("mydate").value;
    tablebody.rows[rowindex].cells[2].innerHTML=document.getElementById("myname").value;
    tablebody.rows[rowindex].cells[3].innerHTML=document.getElementById("myemail").value;
    tablebody.rows[rowindex].cells[4].innerHTML=document.getElementById("myage").value;
    tablebody.rows[rowindex].cells[5].innerHTML=document.getElementById("mobile").value;
    tablebody.rows[rowindex].cells[6].innerHTML=document.getElementById("address").value;
    tablebody.rows[rowindex].cells[7].innerHTML=document.getElementById("country").value;
  }
    
  } 
 
//---------------------------------------------------------------------------------Delete Button-----------------------------------------------------------------------------
function Delete()
{
let tablebody=document.getElementById("tbody"),rowindex;
for( let i=0;i<tablebody.rows.length;i++)
{
  tablebody.rows[i].onclick=function()
  {
    rowindex=this.rowIndex;
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();
    this.cells[0].remove();

  }
}
}

//------------------------------------------------------------------------------Update button------------------------------------------------------------------------------------------

//   let tablebody=document.getElementById("tbody"),rowindex;
//   for( let i=0;i<tablebody.rows.length;i++)
//   {
//     tablebody.rows[i].onclick=function Edit()
//     {
//       rowindex=this.rowIndex;
//       document.getElementById('myid').value=this.cells[0].innerHTML;
//     document.getElementById("mydate").value= this.cells[1].innerHTML;
//     document.getElementById("myname").value= this.cells[2].innerHTML;
//     document.getElementById("myemail").value= this.cells[3].innerHTML;
//     document.getElementById("myage").value= this.cells[4].innerHTML;
//     document.getElementById("mobile").value= this.cells[5].innerHTML;
//     document.getElementById("address").value= this.cells[6].innerHTML;
//     document.getElementById("country").value= this.cells[7].innerHTML;

//     let gender=document.querySelectorAll("input[type=radio]");
//     for( let j=0;j<gender.length;j++)
//     {
//       if(gender[j].value==this.cells[8].innerHTML)
//       {gender[j].checked=true;}
//     }

//    let checkbox=document.querySelectorAll("input[type=checkbox]");
//    let checks=this.cells[9].innerHTML;
//    for(let s=0;s<checkbox.length;s++)
//    {
//     if(checks.includes(checkbox[s].value))
//     {
//       checkbox[s].checked=true;
//     }
//    }
//     }  
//     }
// {
//       this.cells[0].innerHTML=document.getElementById("myid").value;
//       this.cells[1].innerHTML=document.getElementById("mydate").value;
//       this.cells[2].innerHTML=document.getElementById("myname").value;
//       this.cells[3].innerHTML=document.getElementById("myemail").value;
//       this.cells[4].innerHTML=document.getElementById("myage").value;
//       this.cells[5].innerHTML=document.getElementById("mobile").value;
//       this.cells[6].innerHTML=document.getElementById("address").value;
//       this.cells[7].innerHTML=document.getElementById("country").value;
//     }
// }



