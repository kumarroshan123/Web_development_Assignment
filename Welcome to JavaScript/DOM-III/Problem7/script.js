let product=[];

let productname=document.querySelector("#productName");
let productprice=document.querySelector("#productPrice");
let productrating=document.querySelector("#productRating");
let pricegraph=document.querySelector("#priceGraph");
let ratinggraph=document.querySelector("#ratingsGraph");
let addproduct=document.querySelector("#addProduct");

addproduct.addEventListener("click",()=>{
     if(productname.value && (Math.sign(productprice.value)!=-1) && productrating.value>=0 && productrating.value<=5){
        product.push({Name:productname.value,Price:productprice.value,Rating:productrating.value});
        display();
     }else{
        alert("Please Fill the required information correctly");
     }
     productname.value="";
     productprice.value="";
     productrating.value="";
});

function sortGraph(value){
    if(value==='price'){
        product=product.sort((a,b)=>a.Price-b.Price);
    }else{
        product=product.sort((a,b)=>a.Rating-b.Rating);
    }
    display();
}

function display(){
    pricegraph.innerHTML="";
    ratinggraph.innerHTML="";
    product.forEach((ele)=>{
        let mainprice=document.createElement("div");
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${ele.Price}px`;
        
        const label = document.createElement("div");
        label.classList.add("label");
        label.innerText = `$${ele.Price}`;
        mainprice.appendChild(label);
        
        const nameLabel = document.createElement("div");
        nameLabel.classList.add("name");
        nameLabel.innerText = ele.Name;
        mainprice.append(nameLabel);
        mainprice.append(bar);
        pricegraph.append(mainprice);

        let mainrating=document.createElement("div");
        let b = document.createElement("div");
        b.classList.add("bar");
        b.style.height = `${ele.Rating*20}px`;
        
        const l = document.createElement("div");
        l.classList.add("label");
        l.innerText = `${ele.Rating}`;
        mainrating.append(l);
        
        const n = document.createElement("div");
        n.classList.add("name");
        n.innerText = ele.Name;
        mainrating.append(n);
        mainrating.append(b);
        ratinggraph.append(mainrating);
    });
    
}

display();