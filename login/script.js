function fields_bd(fields){
    
    console.log(fields.toString()); 
     console.log(fields[0]); 
     
      var first_name;
      var last_name;
    var api_key;
      var userName;

    var admin = require("firebase-admin");
          var user = firebase.auth().currentUser;
          var ref = db.ref("Users/"+user.uid+"/api_key");
    // Import Admin SDK


// Get a database reference to our posts
var db = admin.database();
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});    
    
 
  
}

function create_table(){
console.log("process create");  
  
location.href="create.html";

}  
function array_create_table(){
   var number = document.getElementById("number_f").value;
   var number_array= number -1; 
    var option_array = new Array(3);
    var option;
    var counter=4;
    var fields = new Array(number);
    var contador_array=0; 
    var contador_array1=0;
  for (var i=1;i<=number;i++) { 
    contador_array =  i-1;
     name = document.getElementById("f"+i+"_name").value;
   type = document.getElementById("f"+i+"_"+"type").value;
     req = document.getElementById("req_"+i).value;
    
     for (var j=1;j<=4;j++) { 
        option = document.getElementById("opt_"+i+"_"+j).value;
        contador_array1 =  j-1;
            if(option.trim() == "")
            {
            counter = counter-1;
            }
            else
            {
             option_array[contador_array1]= option;
              
            }              
        }
      
    fields[contador_array]=name+'<:>'+type+'<:>'+option_array.join("<&>")+'<:>'+req; 

 
    //limpiar array
       option_array = [];
    
  }
    fields_bd(fields);
} 
function create_table_process(){
console.log("process create");  
 var pass_1=false; 

   if (table_name.value.trim() == "")
   { window.alert("capture table name");
    }
    else
    {
               if (display_name.value.trim() == "")
                 { window.alert("capture display name");
                  }
                else
                {
                      if (description.value.trim() == "")
                     { window.alert("capture description");
                      }
                      else
                      {      pass_1=true;
                      }  
                                     
                } 
    } 

  ///validacion de todos los campos
  	var i;
  var campo;
  var lack='' ;
  var bandera=false;
   var number = document.getElementById("number_f").value;
  for (i=1;i<=number;i++) { 
 name = document.getElementById("f"+i+"_name").value;
   type = document.getElementById("f"+i+"_"+"type").value;
  
            if(name.trim() == "")
            { 
             lack =  "capture name in" + "field " + i;
           
            }
           else
           {
                  if(type.trim() == "")
                    { 
                     lack =  "capture type in" + "field " + i;

                    }
                   else
                   {
                            
                     
                   } 
           } 
  }

                          if(lack.trim() == "")
                          {
                             //enviar
                            array_create_table();
                   
                          }
                          else
                          {
                               window.alert(lack);
                          }  



    
    







}  

function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,length);
}

function account_settings()
{
 var first_name=document.getElementById("first_name").value; 
 var last_name=document.getElementById("last_name").value; 
 var phone=document.getElementById("phone").value; 
 var country=document.getElementById("pais").value; 
 var address=document.getElementById("address").value; 
 var state=document.getElementById("state").value; 
 var city=document.getElementById("city").value; 
 var phone=document.getElementById("phone").value; 
 var zip=document.getElementById("zip").value; 
 var bandera = false;     
 var phoneno = /^\d{12}$/;
     var rootRef = firebase.database().ref().child("Users");
     var userID = firebase.auth().currentUser.uid;
     var usersRef = rootRef.child(userID);
 
console.log(phone);
if(first_name=='' || first_name.length<4 || first_name.length>25 )
{
 window.alert("capture the first name");
}
 else
 {
                         if(last_name=='' || last_name.length<4  || last_name.length>25)
                         {
                         window.alert("capture the last name");
                         }
                        else
                        {
                              if (!(phoneno.test(phone))) 
                                {
                                 window.alert("capture the phone");
                                 }
                                 else
                                 {
                                      if(country=='Select' || country=='' || country.length<4 || country.length>25)
                                      {
                                      window.alert("capture the country");
                                      }
                                     else
                                     {
                                                   if(state=='' || state.length<3 || state.length>17)
                                                {
                                               window.alert("capture the state");
                                                }
                                                else
                                                {
                                                     if(city=='' || city.length<3 || city.length>17)
                                                      {
                                                    window.alert("capture the city");
                                                      }
                                                          else
                                                          {
                                                                  if(address=='' || address.length<6 || address.length>55)
                                                                   {
                                                                      window.alert("capture the address");
                                                                    }
                                                                    else
                                                                    {
                                                                      var ercp=/(^([0-9]{1,5})|^)$/;

                                                                        if (!(ercp.test(zip))) 
                                                                        {
                                                                      window.alert("capture the zip");
                                                                       }
                                                                        else
                                                                        {
                                                                          bandera=true;
                                                                        }
                                                                     }
                                                         } 
                              }
         
    }
    
   }
 }
  
 }


 var api_key= generateHexString(41);
console.log(country);
 if(bandera==true)
    {
    alert("Se envia");
 var userData = 
     {
       "firstName":first_name,
       "lastName":last_name,
      "phone": phone,
      "country": country,
      "state": state ,
      "address": address,
      "city": city ,
      "zip": zip ,
      "api_key": api_key,
      
     
     };
    
            usersRef.set(userData, function(error)
              {
                if(error)
                {
                     var errorCode = error.code;
                     var errorMessage = error.message;
                     console.log(errorCode);
                     console.log(errorMessage);

                     window.alert("Message :" + errorMessage);
                }
                else
                {
                       window.location.href="home.html";
                }
              });
     
    }
 
} 

function logout()
{
 firebase.auth().signOut();
 
} 

function login()
{
 var password=document.getElementById("pass").value; 
  
 var email=document.getElementById("mail").value; 
 
 if(email=='' && password=='')
     { 
    alert("From is Incomplete");    
     }
  else
  {
   var result= firebase.auth().signInWithEmailAndPassword(email,password);
   result.catch(function(error)
      {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    window.alert("Message :" + errorMessage);
     });
  }
 
  
}


function create()
{
 var password=document.getElementById("password").value; 
  
 var email=document.getElementById("email").value; 
  
 var retype=document.getElementById("retype").value; 
      emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test(email))
{
  
  if(retype==password  )
     {
   
      var result = firebase.auth().createUserWithEmailAndPassword(email,password);
       result.catch(function(error)
      {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    window.alert("Message :" + errorMessage);
     });
  
 
     document.getElementById("signup").innerHTML="processing";    
       
  
      
      
      
     }
  else
    {
      alert("passwords do not match");
    }
 }
  else
    {
      alert("Wrong Email");
    }
}


function toggleSignup(){
   document.getElementById("login-toggle").style.backgroundColor="#fff";
    document.getElementById("login-toggle").style.color="#222";
    document.getElementById("signup-toggle").style.backgroundColor="#57b846";
    document.getElementById("signup-toggle").style.color="#fff";
    document.getElementById("login-form").style.display="none";
    document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
    document.getElementById("login-toggle").style.backgroundColor="#57B846";
    document.getElementById("login-toggle").style.color="#fff";
    document.getElementById("signup-toggle").style.backgroundColor="#fff";
    document.getElementById("signup-toggle").style.color="#222";
    document.getElementById("signup-form").style.display="none";
    document.getElementById("login-form").style.display="block";
}

