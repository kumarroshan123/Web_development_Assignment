function  testvar(){
    if (true){
        var a= 10;
    }
    console.log(a);
    
}

function  testlet(){
    if (true){
        let a= 10;
    }
    console.log(a);
    
}

// testlet() throws error a is not defined
testvar()