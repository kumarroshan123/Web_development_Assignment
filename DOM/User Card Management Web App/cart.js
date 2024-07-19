let products = document.getElementsByClassName("product")[0];
let t=document.getElementsByClassName("total")[0];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addProduct(product) {
  return `<div>
            <img src="${product.image}" alt="Product Image">
            <h3>${product.title}</h3>
            <h4>Price: $${product.price.toFixed(2)}</h4>
            <h4>quantity: <button class="qtnbtn" onclick="addbtn(${product.id})">+</button> ${product.quantity} <button class="qtnbtn" onclick="subbtn(${product.id})">-</button></h4>
            <button onclick="removefromcart(${product.id})">Remove</button>
        </div>`;
}
function addtotal(total){
    return `<h1>Total :- $${total}</h1>
         <div>
        <button>Checkout</button>
        <button onclick=fn()>Continue Shopping</button>
        </div>`
}
function displayProducts() {
  products.innerHTML = "";
  if (cart.length === 0) {
    const p = document.createElement("h3");
    p.textContent = "Your Cart is Empty !";
    products.append(p);
    t.innerHTML= '';
    t.style.boxShadow = "none";
    t.style.border="0px solid";
    t.style.borderStyle= "none";
    return;
  }
  products.innerHTML = cart.map(addProduct).join("");
  let total = (cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)).toFixed(2) ;
  if (cart.length !== 0) {
    t.innerHTML= addtotal(total);
  }
  let l=JSON.parse(localStorage.getItem('logined'));
  if (l.login==='true'){
    let s=document.querySelector('.sign');
    s.innerHTML=`<p>Welcome ${l.username}!</p>`;
    let out=document.createElement('button');
    out.innerHTML='Logout';
    out.addEventListener('click', function(){
        localStorage.setItem('logined', JSON.stringify({login: 'false', username: ''}));
        s.innerHTML=`<div class="sign">
            <button>Cart <i class="fa fa-shopping-cart" ></i></button>
            <button>Sign Up</button>
            <button>Log In</button>
          </div>`;
    });
    s.append(out);
}
}

function removefromcart(product) {
  cart = cart.filter((p) => p.id !== product);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayProducts();
}

function subbtn(pid) {
  let check = cart.find((p) => p.id == pid);
  if (check.quantity > 1) {
    check.quantity--;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayProducts();
}

function addbtn(pid) {
  let check = cart.find((p) => p.id == pid);
  check.quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayProducts();
}
function fn(){
  window.location.href="index.html";
}
function sfn(){
  window.location.href="signup.html";
}
function lfn(){
  window.location.href="login.html";
}
displayProducts();
