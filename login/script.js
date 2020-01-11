
function account_settings()
{
 var fist_name=document.getElementById("first_name").value; 
 var last_name=document.getElementById("last_name").value; 
 var phone=document.getElementById("phone").value; 
 var country=document.getElementById("pais").value; 
 var address=document.getElementById("address").value; 
 var state=document.getElementById("state").value; 
 var city=document.getElementById("city").value; 
 var phone=document.getElementById("phone").value; 
 var bandera = false;     
 var phoneno = /^\d{10}$/;

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
    if(phone=='' || phone.length<17 || phone.length>21 || (!phone.match(phoneno)) )
    {
     window.alert("capture the phone");
     }
    else
    {
        if(country=='Select' || country=='' || country.length<4 || country.length>12)
        {
        window.alert("capture the country");
        }
       else
       {
               if(state=='' || state.length<3 || state.length>12)
            {
           window.alert("capture the state");
            }
            else
            {
              if(city=='' || city.length<3 || city.length>12)
               {
             window.alert("capture the city");
               }
              else
              {
               if(address=='' || address.length<3 || address.length>12)
                {
                   window.alert("capture the address");
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
 
 if(bandera==true)
    {
    alert("Se envia");
    
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

