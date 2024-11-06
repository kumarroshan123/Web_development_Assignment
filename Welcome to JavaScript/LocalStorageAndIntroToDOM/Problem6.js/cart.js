let cart= JSON.parse(localStorage.getItem("cart")) || [];
let main=document.querySelector('.main');
let empty=document.querySelector('.empty');

function displayUser(){
    main.innerHTML=``;
    cart.forEach(ele => {
        let d=document.createElement('div');
        d.innerHTML=`<h2>Name:${ele.name}</h2>
                     <h2>Email:${ele.email}</h2>
                     <button onclick="delet(${ele.id})">Delete</button>`;
        main.append(d);
    });
}

function delet(id){
    cart=cart.filter((ele)=>ele.id!==id);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayUser();
    if (cart.length === 0) {
        empty.innerHTML = `<h1>No Information is added to cart</h1>`;
    }
}

if (cart.length>0){
   empty.innerHTML=``;
   displayUser();
}else{
    empty.innerHTML=`<h1>No Information is added to cart</h1>`;
}
