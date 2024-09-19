function getNestedProperty(obj){
    let k=obj?.a?.b?.c?.d;
    return k;
}

console.log(getNestedProperty( {
    a: {
        b: {
            c: {
                d: "Nested value"
            }
        }
    }
}));
