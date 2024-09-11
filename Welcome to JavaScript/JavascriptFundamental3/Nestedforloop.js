function createMultiplicationTable(n){
    let arr=[]
    for(let i=1;i<=10;i++){
        arr.push(i*n);
    }
    return arr;
}

let k=20;
let res=[];
for (let i=1;i<=20;i++){
    res.push(createMultiplicationTable(i));
}
console.log(res)