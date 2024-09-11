function identifyComplexType(value){
    if  (Array.isArray(value)){
        console.log("Array");
    }else{
        console.log(typeof(value));
    }
}

let x=[{},"2",'3',true,21,[]];
for (let i=0 ;i<x.length;i++){
    identifyComplexType(x[i]);
}
