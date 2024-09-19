function extractfirstAndRest(arr){
    let [first,...arr1]=arr;
    return [first,arr1];
}

console.log(extractfirstAndRest([1,2,3,4,5]));
