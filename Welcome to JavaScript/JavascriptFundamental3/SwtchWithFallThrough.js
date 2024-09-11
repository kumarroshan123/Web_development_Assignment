function getDayOfWeek(dayNumber){
    switch(dayNumber) {
        case 1: 
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;
        case 3: 
            console.log("Wednesday");
            break;
        case 4: 
            console.log("Thursday");
            break;
        case 5: 
            console.log("Friday");
            break;
        case 6: 
        case 7: 
            console.log("Weekend");
            break;
        default: 
            console.log("Invalid day number");
    }
}

let a= 6;
getDayOfWeek(a);