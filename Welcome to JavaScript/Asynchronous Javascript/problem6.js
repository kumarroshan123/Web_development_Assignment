function calculate(n1,n2){
    function operation(num1,num2,callback){
        return callback(num1,num2);
    }
    function sum(a,b){
        return a+b;
    }
    
    function multiplication(a,b){
        return a*b;
    }
    
    let sumres=operation(n1,n2,sum)
    let multres=operation(n1,n2,multiplication)
    console.log('Sum:',sumres);
    console.log('Multiplication:',multres);
}

calculate(4,5);
calculate(7,8);
