function findFirstEvenNumber(numbers){
    let i=0;
    while(i<numbers.length){
        if (numbers[i]%2==0){
            return numbers[i];
        }
        i++;
    }
}

let n=[11,21,31,41,50,60,70];
console.log(findFirstEvenNumber(n));