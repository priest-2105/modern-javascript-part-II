let x;

const arr = [12, 45, 33, 29, 39];

// Adds to  the last index of the array 
arr.push(100)

// Removes from the last index of the array 
arr.pop();

// Addds to the first index of the array 
arr.unshift(99);

// Removes from the first index of the array 
arr.shift(99);

// reverse the array
arr.reverse();

// check if an item is in an raay 
x = arr.includes(29);

// checks th eindex of th ecurent item 
x = arr.indexOf(12);

// uses the index range in the arguemnt to create  a new array
x = arr.slice(1, 4);

// uses the index range in the arguemnt changin the initial array
// x = arr.splice(1, 4)

// x = arr.splice(3, 3)


x = arr.splice(1, 4).reverse().toString().charAt(0);



console.log(x);
