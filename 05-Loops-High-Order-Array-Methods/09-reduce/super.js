//  const numbere = [1,2,3,4,5,6,7,8,9,10];


//  const sum = numbers.reduce(function (accumulator, currentValue) {
//  return accumulator + currentValue;
//  }, 0)

// const sum2 = numbere.reduce((acc, cur) => acc + cur, 10);

// console.log(sum2);



// // uaing  a for loop 

// const sum3 = () => {
//     let acc = 0;
//     for (const cur of numbers){
//         // acc = acc + cur;
//         acc += cur;
//     }
//     return acc;
// }


// console.log(sum3());

const cart = [
    {id : 1, name: 'product 1', price: 130},
    {id : 2, name: 'product 2', price: 150},
    {id : 3, name: 'product 3', price: 175},
]



const cartTotal = cart.reduce((acc, cartcur) => { return acc + cartcur.price}, 0)


console.log(cartTotal);







