const fruits = [ 'apple', 'pear', 'orange' ];
const berries = [ 'strawberry', 'rasberry', 'blueberry' ];

// fruits.push(berries);


// x = fruits[3][1];

const allFruits = [fruits, berries]

x = allFruits[1][0];

x = fruits.concat(berries);


// Spread Operator
x = [...fruits, berries]



// Flatten Array
const arr = [1, 2, [3,3,4], 5, [6, 7], 8]

x = arr.flat();


// Statuic MEthod on Array Object

x = Array.isArray(x)

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c)

console.log(x);
