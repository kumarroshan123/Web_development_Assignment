function calculatetotal(price,tax=0.05){
    return (price+(price/100*0.05));
}

console.log(calculatetotal(500));
