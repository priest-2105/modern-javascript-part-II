if (true){
    console.log('This is true');
}

if (false){
    console.log('This is Not true');
}

const x = 10;
const y = 5;

if (x > y){
    console.log( `${x} is great than ${y}`);
}

if (x === y){
    console.log( `${x} is equal to ${y}`);
} else{
    console.log( `${x} is not  equal to ${y}`);
}

if (x !== y){
    const z= 20;
    console.log(`${z} is 20`);
}

// Shorthand if 

if (x > y) console.log( `${x} is great than ${y}`),
    console.log('This is true');
else if (x > y) console.log(`This is False`);
