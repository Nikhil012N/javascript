let ArrayData=[];
let id=1;
//------------------------------------------------------------------------------------table--------------------------------------------------------------------------------------
function table()
{
    let text="";
    for (let i in ArrayData)
    {
        text+="<tr><td>"+ArrayData[i]["CATEGORY"]+"</td><td>"+ArrayData[i]["NAME"]+`</td><td><button type="button" id="btndelete" onclick="Delete(${ArrayData[i]["ID"]})">Delete</button>&nbsp;<button type="button" id="btnadd" onclick="ShowVarients(${ArrayData[i]["ID"]})">Variant</button>&nbsp;<button type="button" id="btndetails" onclick="Details(${ArrayData[i]["ID"]})">Detail</button>
        </td></tr>`;
    }
    return text;
}
//----------------------------------------------------------------------------keypress validation---------------------------------------------------------------------------------
const alphabetcheck=(a)=>{
    let unicode=a.which;
    if((unicode>64&&unicode<91)||(unicode>96&&unicode<123))
    {
        return true;
    }
    return false;
};

const pricecheck=(a)=>{
    let unicode=a.which;
    if(unicode>47 && unicode<58)
    {
        return true;
    }
    return false;
};
//------------------------------------------------------------------------------------ Category validation------------------------------------------------------------------------------
const catval=()=>
{
    let category= document.getElementById("cat").value;
    let prd=Number(category);
    if(category=="" || Number.isInteger(prd))
    {
        document.getElementById("cat").value="";
        document.getElementById("catval").style.display="block";
    }
    else
    {
        document.getElementById("cat").value=category.toUpperCase();
        document.getElementById("catval").style.display="none";
    }
};
//----------------------------------------------------------------------------------------Product NAME---------------------------------------------------------------------------
const Pronameval=()=>
{
let product=document.getElementById("name").value;
let Name=Number(product)
if(product==""|| Number.isInteger(Name))
{
    document.getElementById("name").value="";
    document.getElementById("nam").style.display="block";
}
else
{
    document.getElementById("name").value=product.toUpperCase();
    document.getElementById("nam").style.display="none";
}
};
//--------------------------------------------------------------------------------------For Price---------------------------------------------------------------------------------
const Priceval=()=>{
    let Price=document.getElementById("price").value;
    let num=Number(Price);
    if(Price==0||isNaN(num)||Price=="")
    {
        document.getElementById("price").value="";
        document.getElementById("prc").innerHTML="Enter price";
        document.getElementById("prc").style.display="block";
    }
    else{
        document.getElementById("prc").style.display="none";
    }
};
//----------------------------------------------------------------------------------------For Variant Name----------------------------------------------------------------------------
const VariantName=()=>
{
    let variantname=document.getElementById("varname").value;
    let Name=Number(variantname)
    if(variantname==""|| Number.isInteger(Name))
    {
        document.getElementById("varname").value="";
        document.getElementById("variantval").style.display="block";
    }
    else
    {
        document.getElementById("varname").value=variantname.toUpperCase();
        document.getElementById("variantval").style.display="none";
    }

};
//---------------------------------------------------------------------------------------Color--------------------------------------------------------------------------------------
const colorscheck=()=>
{
    let Color=document.getElementById("color").value;
    let Name=Number(Color)
    if(Color==""|| Number.isInteger(Name))
    {
        document.getElementById("color").value="";
        document.getElementById("color1").style.display="block";
    }
    else
    {
        document.getElementById("color").value=Color.toUpperCase();
        document.getElementById("color1").style.display="none";
    }
};
//-----------------------------------------------------------------------------------Description-----------------------------------------------------------------------------------------
const descript=()=>
{
    let Desc=document.getElementById("description").value;
    let Name=Number(Desc)
    if(Desc==""|| Number.isInteger(Name))
    {
        document.getElementById("description").value="";
        document.getElementById("describe").style.display="block";
    }
    else
    {
        document.getElementById("description").value=Desc.toUpperCase();
        document.getElementById("describe").style.display="none";
    } 
};
//-------------------------------------------------------------------------------------Save button--------------------------------------------------------------------------------
function Save()
{
if(document.getElementById("name").value!="" && document.getElementById("cat").value!="")
{
    let Name= document.getElementById("name").value;
    let Category=document.getElementById("cat").value;
    let variant =[];
    const InitialValue={
        ID:id,
        CATEGORY:Category,
        NAME:Name,
        Variant:variant,
    }
    id=id+1
    ArrayData.push(InitialValue);
    let tablebody=document.getElementById("tbody");
    tablebody.innerHTML =table();
    console.log(ArrayData);
    document.getElementById("table1").style.display = "block";
    document.getElementById("form1").reset();
}
else
{
if(document.getElementById("name").value =="")
{
document.getElementById("nam").style.display = "block";
}
if(document.getElementById("cat").value=="")
{
document.getElementById("catval").style.display = "block";
}
}
}

//----------------------------------------------------------------------------Delete button-------------------------------------------------------------------------------------------------------
const Delete = (value) =>
{
    if(confirm("Do you want to delete this data"))
  {
ArrayData.filter((id,i)=>{
    if(value==id.ID)
    {
      ArrayData.splice(i,1);
    }
});
let tablebody= document.getElementById("tbody");
tablebody.innerHTML = "";
tablebody.innerHTML=table();
  }
  return false;
};
//----------------------------------------------------------------------show  Varients on form 2------------------------------------------------------------------------------------------------------------------
const ShowVarients=(value)=>
{
    document.getElementById("form2").reset();
    console.log(value);
    for(let i=0;i<ArrayData.length;i++)
    {
       if(ArrayData[i]["ID"]==value)
       {
           document.getElementById("cat1").value=ArrayData[i]["CATEGORY"];
           document.getElementById("name1").value=ArrayData[i]["NAME"];
           document.getElementById("SaveVariant").value=value;
       }
    }
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
};
//----------------------------------------------------------------------------------Save Variant---------------------------------------------------------------------------------------------
function SaveVarient(value)
{
    if(document.getElementById("varname").value!="" && document.getElementById("price").value!="" && document.getElementById("color").value!="" && document.getElementById("description").value!="")
    {
    console.log("THIS VALUE IS UPDATED",value);
    let id=Math.floor(Math.random() * 100) + 1;
    let Variantname=document.getElementById("varname").value;
    let Price=document.getElementById("price").value;
    let Color=document.getElementById("color").value;
    let Description=document.getElementById("description").value;
    const initialvarient = 
    {
      Id  : id,
      varnam:Variantname,
      prc : Price,
      colr: Color,
      Desc: Description,
    };
    let index =ArrayData.findIndex((data) => data.ID==value);
    ArrayData[index].Variant.push(initialvarient);
    
    console.log("UPDATE DATA",ArrayData);
    console.log(JSON.stringify(ArrayData));
    document.getElementById("table2").style.display = "block";
    alert("data saved");
    document.getElementById("form1").style.display="block";
    document.getElementById("form2").style.display="none";
    document.getElementById("form2").reset();
   } 
else
{
if(document.getElementById("varname").value == "" )
{
document.getElementById("variantval").style.display="block";
}
if(document.getElementById("price").value == "" )
{
document.getElementById("prc").style.display="block";
}
if(document.getElementById("color").value == "")
{
document.getElementById("color1").style.display="block";
}
if(document.getElementById("description").value == "")
{
document.getElementById("describe").style.display="block";
}
}

}
//------------------------------------------------------------------------Add to detail-----------------------------------------------------------------------------------------------------------
const Details = (value) => {
    document.getElementById("output").innerHTML = "";
    document.getElementById("table2").style.display="block";
   
    ArrayData.filter((id, i) => {
      if (value == id.ID) {
       
        let data = "";
        if (ArrayData[i]["Variant"].length > 0) {
          ArrayData[i]["Variant"].forEach((row) => {
          data += " Variant Name: "+row.varnam+"<br> Price: " +row.prc+"<br> Color: "+row.colr+"<br> Description: "+row.Desc+"<br><br><br>";
        });
        }
        let text="<tr><td><h1>Products:</h1>Category: "+ArrayData[i]["CATEGORY"]+"<br> Name: "+ArrayData[i]["NAME"]+"</td></tr>"+"<tr><td><h2>Variants</h2>"+data+"</td></tr>";
        let tablebody = document.getElementById("output");
        tablebody.innerHTML += text;
      }
    });
  };