
var nameError=document.getElementById("nameError").value;
var emailError=document.getElementById("emailError").value;
var messageError=document.getElementById("MessageError").value;
function validatename()
var username=documnet.getElementById('w3lName').value;
{ if(username.length==0)
{
nameError.innerHTML='name is required';
document.form1.name.focus();
return false;
}
if(email.value="")
{
alert("must have email");
document.form1.w3lSender.focus();
return false;
}
if(message.value="")
{
alert("must have email");
document.form1.w3lMessage.focus();
return false;
}
return true;
}