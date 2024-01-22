let ArrayData = [];
console.log(ArrayData);
let id=1;

//-----------------------------------------------------------------------------date validation-----------------------------------------------------------------
const date=()=>{
  if (document.getElementById("mydate").value == "") {
    document.getElementById("dateval").style.display = "block";
  } else {
    document.getElementById("dateval").style.display = "none";
  }
}

//------------------------------------------------------------------------------NAME VALIDATION-------------------------------------------------------------------------------------

const namval=(event)=> {
  let a = event.which;
  if ((a > 96 && a < 123) || (a > 64 && a < 91) || a == 32) {
    return true;
  }
  return false;
}
//name change
const changename=()=> {
  let name = document.getElementById("myname").value.replace(/^\s+|\s+$/gm, "");
  let ename = name.toUpperCase();
  if (document.getElementById("myname").value == "") {
    document.getElementById("nameval").style.display = "block";
  } else {
    document.getElementById("myname").value = ename;
    document.getElementById("nameval").style.display = "none";
  }
}

//----------------------------------------------------------------------Email validation----------------------------------------------------------------------------------------------

const valeml=()=> {
  let email = document.getElementById("myemail").value.toUpperCase();
  const regex =/^(?!\d+@)\w+([-+.']\w+)*@(?!\d+\.)\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (email.match(regex)) {
    document.getElementById("myemail").value = email;
    document.getElementById("emailval").style.display = "none";
  } else {
    document.getElementById("myemail").value = "";
    document.getElementById("emailval").style.display = "block";
  }
}

//----------------------------------------------------------------------Age validation-----------------------------------------------------------------------------------------------------
const valage=()=> {
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
const valphn=()=> {
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
const addresval=(add)=> {
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

const addres=()=> {
  let add = document.getElementById("address").value.replace(/^\s+|\s+$/gm, "");
  let adrs = add.toUpperCase();
  if (document.getElementById("address").value == "") {
    document.getElementById("addressval").style.display = "block";
  } else {
    document.getElementById("addressval").style.display = "none";
    document.getElementById("address").value = adrs;
  }
}
//------------------------------------------------------------------------------Country---------------------------------------------------------------------------------------
const countryfnc=()=>
{
  let cnt=document.getElementById("country")
  if (!(cnt.value))
  {
    document.getElementById("countryval").style.display = "block";
    return true;
  }
  else{
    document.getElementById("countryval").style.display = "none";
    return false;
  }
}

//-------------------------------------------------------------------------Gender validation-------------------------------------------------------------------------------------------
const genderfnc=()=>
{
  let gen=document.getElementsByName("Gender");
  if(gen[0].checked==true || gen[1].checked==true)
  {
    document.getElementById("genderval").style.display = "none";
    return true;
  }
  else{
    document.getElementById("genderval").style.display = "block";
  }
}
//----------------------------------------------------------------------games validation----------------------------------------------------------------------------------------------------------
const gamesval=()=>
{
  let checks=document.querySelectorAll("input[type=checkbox]:checked").length;
  if(checks>0)
  {

    document.getElementById("checkboxval").style.display = "none";
    // return true;
  }
  else{
    document.getElementById("checkboxval").style.display = "block";
  }
}
//-----------------------------------------------------------------------Submit button------------------------------------------------------------------------------------------------------
function submisson() {
  let male =   document.getElementById("Male");
  let female = document.getElementById("Female");
  let genvalue = "";
  if (male.checked == true) {
    genvalue = male.value;
  } else if (female.checked == true) {
    genvalue = female.value;
  }

  //games validattion
  let output = [];
  let checkbox = document.querySelectorAll("input[type=checkbox]:checked");
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
    genvalue != "" &&
    output != ""
  ) 
  {
    ///tbody id

    //data insertioon
    let date = document.getElementById("mydate").value;
    let name = document.getElementById("myname").value;
    let email = document.getElementById("myemail").value;
    let age = document.getElementById("myage").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let country = document.getElementById("country").value;
    let gender = genvalue;
    let games = output.join(", ");
  
    const initialValue = {
      ID: id,
      Date: date,
      Name: name,
      Email: email,
      Age: age,
      Mobile: mobile,
      Address: address,
      Country: country,
      Gender: gender,
      Checkbox: games,
      // Change: k,
    };
    id=id+1;
    ArrayData.push(initialValue);
    console.log(ArrayData);
    let tablebody = document.getElementById("tbody");
    let text = "";
    for (let i in ArrayData) {
      console.log("ArrayData[i] ", ArrayData[i]);
      text =
        "<tr>" +
        "<td>" +
        ArrayData[i]["ID"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Date"] +
        "</td> " +
        "<td>" +
        ArrayData[i]["Name"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Email"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Age"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Mobile"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Address"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Country"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Gender"] +
        "</td>" +
        "<td>" +
        ArrayData[i]["Checkbox"] +
        "</td>" +
        `<td><button id="Edit" onclick="Edit(${ArrayData[i]["ID"]})">Edit</button>&nbsp;<button id="Deleted" onclick="Deleted(${ArrayData[i]["ID"]})">Delete</button></td></tr>`;
      }
    console.log("text", text);
    tablebody.innerHTML += text;
    console.log("wamp", Object.keys(ArrayData));
    //-------------------------------------------------------------Empty code-----------------------------------------------------------------------------
    document.getElementById("form").reset();
  } 
  else {
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
    }difference

    // country validation
    if (document.getElementById("country").value == "") {
      document.getElementById("country").focus();
      document.getElementById("countryval").style.display = "block";
    }

    if (genvalue== "") {
      document.getElementById("genderval").style.display = "block";
    } else {
      document.getElementById("genderval").style.display = "none";
    }
    if (output== "") {
      document.getElementById("checkboxval").style.display = "block";
    } else {
      document.getElementById("checkboxval").style.display = "none";
    }


  }
}
//---------------------------------------------------------------------Delete code-----------------------------------------------------------------------------
const Deleted=(value)=> {
  if(confirm("Do you want to delete this data"))
  {
  ArrayData.filter((id, i) => {
    if (value == id.ID) 
    {
      ArrayData.splice(i, 1);
    }
  });
  let tablebody1 = document.getElementById("tbody");
  let text1 = "";
  tablebody1.innerHTML="";
  for (let i in ArrayData) {
    console.log("ArrayData[i]",ArrayData[i]);
    text1 +=
      "<tr>" +
      "<td>" +
      ArrayData[i]["ID"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Date"] +
      "</td> " +
      "<td>" +
      ArrayData[i]["Name"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Email"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Age"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Mobile"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Address"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Country"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Gender"] +
      "</td>" +
      "<td>" +
      ArrayData[i]["Checkbox"] +
      "</td>" +
      `<td><button id="Edit" onclick="Edit(${ArrayData[i]["ID"]})">Edit</button>&nbsp;<button id="Delete" onclick="Deleted(${ArrayData[i]["ID"]})">Delete</button></td></tr>`;
          tablebody1.innerHTML = text1;
        }
      }
        return false;
}
//--------------------------------------------------------------------------------------------Edit--------------------------------------------------------------------------------------------
const Edit=(id)=>
{
  console.log(id);
  for(let i=0;i<ArrayData.length;i++)
  {
    if(ArrayData[i]["ID"]==id)
    {
    document.getElementById("form").reset();
    document.getElementById("myid").value=ArrayData[i]["ID"];
    document.getElementById("mydate").value=ArrayData[i]["Date"];
    document.getElementById("myname").value=ArrayData[i]["Name"];
    document.getElementById("myemail").value=ArrayData[i]["Email"];
    document.getElementById("myage").value=ArrayData[i]["Age"];
    document.getElementById("mobile").value=ArrayData[i]["Mobile"];
    document.getElementById("address").value=ArrayData[i]["Address"];
    document.getElementById("country").value=ArrayData[i]["Country"];
    let gender=document.querySelectorAll("input[type=radio]");
        for( let j=0;j<gender.length;j++)
        {
          if(gender[j].value==ArrayData[i]["Gender"])
          {gender[j].checked=true;}
        }
       let checkbox=document.querySelectorAll("input[type=checkbox]");
       let checks=ArrayData[i]["Checkbox"];
       for(let s=0;s<checkbox.length;s++)
       {
        if(checks.includes(checkbox[s].value))
        {
          checkbox[s].checked=true;
        }
       }
      }
    }
    document.getElementById("updatebtn").value=document.getElementById("myid").value;
    document.getElementById("updatebtn").style.display='block';
    document.getElementById("submitbtn").style.display='none'; 
}
//-----------------------------------------------------------------------------------------Update button--------------------------------------------------------------------------
const Update=(num)=>
{
  const UpdatedData=[];
  let male = document.getElementById("Male");
  let female = document.getElementById("Female");
  let genvalue = "";
  if (male.checked == true) {
    genvalue = male.value;
  } else if (female.checked == true) {
    genvalue = female.value;
  }

  //games validattion
  let output = [];
  let checkbox = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkbox.length; i++) {
    output.push(checkbox[i].value);
  }

  alert(num);
   document.getElementById("updatebtn").style.display='none';
    document.getElementById("submitbtn").style.display='block';
for(let i=0;i<ArrayData.length;i++)
  {
    if(ArrayData[i]["ID"]==num)
    {
    ArrayData[i]["ID"]      = document.getElementById("myid").value;
    ArrayData[i]["Date"]    = document.getElementById("mydate").value;
    ArrayData[i]["Name"]    = document.getElementById("myname").value;
    ArrayData[i]["Email"]   = document.getElementById("myemail").value;
    ArrayData[i]["Age"]     = document.getElementById("myage").value;
    ArrayData[i]["Mobile"]  = document.getElementById("mobile").value;
    ArrayData[i]["Address"] = document.getElementById("address").value;
    ArrayData[i]["Country"] = document.getElementById("country").value;
    ArrayData[i]["Gender"]  = genvalue;
    ArrayData[i]["Checkbox"]= output.join(",");
    }

    UpdatedData.push(ArrayData[i]);
  }

  ArrayData = UpdatedData;

  let tablebody = document.getElementById("tbody");
  let text = "";
  tablebody.innerHTML = '';
  for (let i in UpdatedData) {
    console.log("UpdatedData[i] ", UpdatedData[i]);
    text +=
      "<tr>" +
      "<td>" +
      UpdatedData[i]["ID"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Date"] +
      "</td> " +
      "<td>" +
      UpdatedData[i]["Name"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Email"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Age"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Mobile"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Address"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Country"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Gender"] +
      "</td>" +
      "<td>" +
      UpdatedData[i]["Checkbox"] +
      "</td>" +
      `<td><button id="Edit" onclick="Edit(${UpdatedData[i]["ID"]})">Edit</button>&nbsp;<button id="Deleted" onclick="Deleted(${UpdatedData[i]["ID"]})">Delete</button></td></tr>`;
    }
  console.log("text", text);
  tablebody.innerHTML = text;
  document.getElementById("form").reset(); 
}