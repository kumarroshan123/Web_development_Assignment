let n = [10, 20, 15, 25];
let arr = [];
let op = "<=";
let c;
for (let i = 0; i < n.length - 1; i++) {
    let num1 = n[i];
    let num2 = n[i + 1];
    switch (op) {
        case '>':
            c= num1 > num2;
            arr.push(`${num1} ${op} ${num2} is ${c}`);
            break;
        case '<':
            c = num1 < num2;
            arr.push(`${num1} ${op} ${num2} is ${c}`);
            break;
        case '>=':
            c = num1 >= num2;
            arr.push(`${num1} ${op} ${num2} is ${c}`);
            break;
        case '<=':
            c = num1 <= num2;
            arr.push(`${num1} ${op} ${num2} is ${c}`);
            break;
    }
}
console.log(arr);