function calculateExpression(a,b,c){
    return ((a+b)*c/(b-a));
}

let n = [10, 20, 15, 25 ,30 ,50 ,5];
let arr = []
for (let i=0;i<n.length-3;i++)
{
    arr.push(calculateExpression(n[i],n[i+1],n[i+2]));
}
console.log(arr)