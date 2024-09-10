function isTruthy(a){
    if (a){
        return true;
    }else{
        return false;
    }
}


let a= [1, 0, null, undefined, "", "Hello", NaN, true, false, 42," "];
let arr=[]
for (let i=0;i<a.length;i++)
{
    if (isTruthy(a[i]))
    {
        arr.push(a[i]);
    }
}
console.log(arr);
