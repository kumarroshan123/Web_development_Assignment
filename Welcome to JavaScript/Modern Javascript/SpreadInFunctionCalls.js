function calculateTotal(...args){
    return args.reduce((a,b)=>{
        return  a+b;
    },0);
}

console.log(calculateTotal(1,2,3,4,5,6,7,8,9));
