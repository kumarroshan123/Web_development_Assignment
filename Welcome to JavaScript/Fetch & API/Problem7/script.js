let users;
let main=document.querySelector(".main");
let btn=document.querySelector(".fetch");
let head=document.querySelector(".head")
let f=async () => {
    try{
        let res= await fetch("https://reqres.in/api/users?page=2");
        let data= await res.json();
        users=data.data
        let h1=document.createElement("h1");
        h1.innerHTML=`Users Information`;
        head.append(h1);
        users.forEach(ele => {
            let b=document.createElement("div");
            b.className='box';
            let img=document.createElement("img");
            img.src=ele.avatar;
            let h2= document.createElement("h2");
            h2.innerHTML=`Name: ${ele.first_name} ${ele.last_name}`;
            let email=document.createElement("p");
            email.innerHTML=`Email: ${ele.email}`
            b.append(img);
            b.append(h2);
            b.append(email);
            main.append(b);
        });
    }catch(error){
        main.textContent = "Failed to load user data.";
    } 
}

btn.addEventListener('click',()=>{
    btn.style.display='none';
    f();
})
