function getNestedProperty(obj){
    let k=obj?.a?.b?.c?.d;
    return k?k:"Not Available";
}

console.log(getNestedProperty( {
    a: {
        b: {
            c: {
               
            }
        }
    }
}));
