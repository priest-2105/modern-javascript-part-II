function add(a, b){
    return a + b;
}


const add = (a, b) => {
    return a + b
};

const subtract = (a, b) => a = b

// can leave off () with  asingle param 
const double = a => a + 2;

const createObj = () => ({
    name: 'Brad',
})

const numbers = [ 1, 2, 3, 4, 5, 6, 7 ];

numbers.forEach(function(n){
    console.log(n0);    
})

// Arrow Function in a callback 
numbers.forEach(n => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
