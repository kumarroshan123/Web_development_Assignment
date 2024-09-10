function countFalsyValues(a){
    if (a){
        return 0;
    }else{
        return 1;
    }
}


let a= [1, 0, null, undefined, "", "Hello", NaN, true, false, 42," "];
let c=0;
for (let i=0;i<a.length;i++)
{
    c=c+countFalsyValues(a[i]);
}
console.log(c)
