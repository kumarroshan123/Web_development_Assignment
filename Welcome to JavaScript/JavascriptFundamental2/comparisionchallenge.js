function compare(a,b,c){
    if (a === b && b === c) {
        return "All three numbers are equal.";
    } else if (a > b && a > c) {
        if (b === c) {
            return "a is the largest, and b and c are equal.";
        } else {
            return "a is the largest.";
        }
    } else if (b > a && b > c) {
        if (a === c) {
            return "b is the largest, and a and c are equal.";
        } else {
            return "b is the largest.";
        }
    } else if (c > a && c > b) {
        if (a === b) {
            return "c is the largest, and a and b are equal.";
        } else {
            return "c is the largest.";
        }
    } else if (a === b) {
        return "a and b are equal, and c is different.";
    } else if (b === c) {
        return "b and c are equal, and a is different.";
    } else if (a === c) {
        return "a and c are equal, and b is different.";
    }
}

let n = [10, 20, 15, 15 ,5 ,50 ,5];
let arr = []
for (let i=0;i<n.length-3;i++)
{
    arr.push(compare(n[i],n[i+1],n[i+2]));
}
console.log(arr);