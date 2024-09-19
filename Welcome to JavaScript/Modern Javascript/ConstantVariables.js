function createConstantArray(){
    const arr = [1,2,3];
    console.log(arr);
    
    arr.push(4);
    console.log(arr);
    
    
    //arr= [3,2,1]; in constant reassign is not allowed
    console.log(arr);
}

createConstantArray()