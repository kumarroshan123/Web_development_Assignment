function sum(...numbers){
    let s=0;
   for(let i=0;i<numbers.length;i++){
      s+=numbers[i];
   }
   return s;
}

console.log(sum(2,3,4,5,6));
