// Challenge One 
// let x;

// const arr = [1, 2, 3, 4, 5]'

// arr.unshift(0);
// arr.push(6);
// arr.reverse();
// console.log(arr);


// Challenge Two

let x;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr2.splice(0, 1);

x = [...arr1, ...arr2];


console.log(x);
