function loopwithVarAndLet(){
    for(var i=0;i<=5;i++){
        ;
    }
    console.log(i);
    for(let j=0;j<=5;j++){
        ;
    }
    // console.log(j); // throws an error j is not defined
}
loopwithVarAndLet()