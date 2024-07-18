let products= document.getElementsByClassName('product')[0];

function addProduct(product){
    return `<div>
            <img src="${product.image}" alt="Product Image">
            <h3>${product.title}</h3>
            <h4>Price: $${product.price}</h4>
            <h4>quantity: $${product.quantity}</h4>
            <button onclick="removefromcart">Remove</button>
        </div>`;
}

function displayProducts(){
    let cart= JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length===0){
        const p= document.createElement('h3');
        p.textContent= 'No products in the cart';
        products.append(p);
        return;
    }
    products.innerHTML= cart.map(addProduct).join('');
}

displayProducts();