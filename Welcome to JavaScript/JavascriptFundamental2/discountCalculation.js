function calculateDiscount(price, member){
    if (member){
        return (price-(price/10));
    }else{
        return price;
    }
}

let price=2000;
let member=true;
console.log(calculateDiscount(price,member));