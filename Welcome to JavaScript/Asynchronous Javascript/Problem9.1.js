function codingScoreCheck(marks,score){
    setTimeout(()=>{
        let sum=marks.reduce((a,b) => {
            return a+b;
        },0);
        let avg=sum/marks.length;
        if(avg>=score){
            console.log(`Average: ${avg}`);
            ;
        }else{
            console.log("Sorry you haven't cleared the coding round");
        }
    },2000);
}

codingScoreCheck([70,45,30,35,30],40);
codingScoreCheck([70,45,20,35,30],45);

