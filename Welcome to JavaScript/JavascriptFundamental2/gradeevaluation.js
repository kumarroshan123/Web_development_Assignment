function evaluateGrade(grade) {
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else if (grade >= 70) {
        console.log("C");
    } else if (grade >= 60) {
        console.log("D");
    } else if (grade >= 40) {
        console.log("E");
    } else {
        console.log("F");
    }
}

let num=86;
evaluateGrade(num);
