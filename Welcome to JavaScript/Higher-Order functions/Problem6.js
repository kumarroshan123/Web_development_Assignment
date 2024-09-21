const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

let obj = numbers.reduce((res, data) => {
  if (data % 3 == 0 || data % 5 == 0) {
    return res + data;
  } else {
    return res;
  }
}, 0);
console.log(obj);
