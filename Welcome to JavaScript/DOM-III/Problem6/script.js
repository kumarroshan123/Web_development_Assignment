let name =document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let button=document.querySelector("#button");
let namewarn=document.querySelector("#namewarn");
let emailwarn=document.querySelector("#emailwarn");
let passwordwarn=document.querySelector("#passwordwarn");
let valid=true;

button.addEventListener("click",(e)=>{
    e.preventDefault();
    namewarn.innerHTML="";
    emailwarn.innerHTML="";
    passwordwarn.innerHTML="";
    valid=true;
    let cname=checkname(name.value);
    let cemail=checkemail(email.value);
    let cpassword=checkpassword(password.value);
    if(!cname){
       namewarn.innerHTML="Please enter valid name";
       valid=false;
    }
    if(!cemail){
        emailwarn.innerHTML="Please enter valid email";
        valid=false;
     }
8
     if(!cpassword){
        passwordwarn.innerHTML="Password length should be atleast 8";
        valid=false;
     }

     if(valid){
        alert("form is submitted");
     }

});

function checkname(name){
    name=name.toLowerCase()
    for(let i=0;i<name.length;i++)
    {
        if(!((name[i]>="a" && name[i]<="z")||name[i]===" "))
        {
            return false;
        }
    }
    return true;
}

function checkemail(name){
    for(let i=0;i<name.length;i++){
        if(name[i]==="@" && name.length>5)
        {
            return true;
        }
    }
    return false;
}

function checkpassword(name){
    return name.length>=8?true:false;
}