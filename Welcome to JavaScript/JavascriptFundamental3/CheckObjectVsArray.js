function isArrayOrObject(value){
    if (Array.isArray(value)){
        console.log("Array");
    }else{
        console.log(typeof(value));
    }
}

let x=[1,2,3];
isArrayOrObject(x);