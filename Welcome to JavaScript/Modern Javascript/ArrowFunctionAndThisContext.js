class Person{
    constructor(name){
        this.name = name;
        
    }
    printname=()=>{console.log(this.name)}

}

let a=new Person("Kumar Roshan");
a.printname();