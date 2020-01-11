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

