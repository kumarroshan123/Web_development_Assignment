let arr=[2,6,7,1,13,8,45,17,65,27,29,18,19,23]

function filterArray(arr,callback){
    let ans=[];
    for(let i=0;i<arr.length;i++)
    {
        if(callback(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}

function tocheckeven(a){
    if (a%2==0){
        return true;
    }
    return false;
}

console.log(filterArray(arr,tocheckeven));
