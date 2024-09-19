function demonstrateTDZ(){
    //console.log(a); //throws  an error cannot access  'a'
    console.log(b);  //doesn't throw an error and shows value as undefined 
    let a=101;
    var b=200;
}

demonstrateTDZ()