document.addEventListener('DOMContentLoaded', function(){
    let login=document.querySelector('.login');
    let signup=document.querySelector('.signup');
    console.log(login,signup);
    if (login){
        login.addEventListener("submit", loginfn);
    }
    if (signup){
        signup.addEventListener("submit", signupfn);
    }
    function getuser(){
        return JSON.parse(localStorage.getItem('user')) || [];
    }

    function loginfn(e){
        e.preventDefault();
        let email=document.getElementById('username').value;
        let password=document.getElementById('password').value;
        let user=getuser();
        if (!user.some((user) => user.username==email && user.password==password)){
            alert("Invalid Username or Password");
            return;
        }
        let login={login:'true', username:email};
        localStorage.setItem('logined',JSON.stringify(login));
        alert("Login successful");
        window.location.href="index.html";
    }

    function signupfn(e){
        e.preventDefault();
        let username=document.getElementById('username').value;
        let password=document.getElementById('password').value;
        let user=getuser();
        if (user.some((user) => user.username==username)){
            alert("Username already exists");
             return;
        }
        user.push({username:username, password:password});
        localStorage.setItem('user', JSON.stringify(user));
        alert("Signup successful");
        window.location.href="login.html";
    }
});