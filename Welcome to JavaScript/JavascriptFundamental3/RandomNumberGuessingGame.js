function guessNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

let arr=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
let i=0;
do{
    if(arr[i]==guessNumber()){
        console.log("Yay you guessed it right Number",arr[i])
        break
    }
    i++;
}while(i<arr.length)