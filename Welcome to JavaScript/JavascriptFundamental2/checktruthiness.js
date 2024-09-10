function isTruthy(a){
    if (a){
        return true;
    }else{
        return false;
    }
}


let a= [1, 0, null, undefined, "", "Hello", NaN, true, false, 42," "];
for (let i=0;i<a.length;i++)
{
    console.log(a[i],check(a[i]));
}
