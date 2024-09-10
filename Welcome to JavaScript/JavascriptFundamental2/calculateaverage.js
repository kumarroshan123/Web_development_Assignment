function calculateaverage(num){
    let s=0;
    for(let i=0;i<num.length;i++)
    {
        s=s+num[i];
    }
    return (s/num.length);
}

let n = [10, 20, 15, 15 ,5 ,50 ,5];
console.log(calculateaverage(n))