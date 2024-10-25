function UnitMovementCheck(averageCodingScore,averageHukumuscore,cutoffScore){
    setTimeout(()=>{
        let avg=(averageCodingScore+averageHukumuscore)/2
        if(avg>=cutoffScore){
            console.log(`Average: ${avg}`);
            ;
        }else{
            console.log("Sorry you haven't cleared the final round");
        }
    },2000);
}

UnitMovementCheck(45,56,50);
UnitMovementCheck(35,75,65);

