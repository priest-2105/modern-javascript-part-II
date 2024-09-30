// Challenge 2 
const getCelsiusfarahn = fahren =>  (fahren - 32) * (5/9)

// const getCelsiusfarahn = fahren => { return (fahren - 32) * (5/9)}

console.log(getCelsiusfarahn(50));


// Challenge Two
const minMax = (arr) => {
    return({
        min : Math.min(...arr),
        max : Math.max(...arr)    
    })
}

console.log(minMax([1, 2, 3, 4, 5]));


// Challenge Three

(function add(length, width){
        const area = length * width;
        console.log(`The area of th ereactangle with  a lenght of ${length} and a width of ${width} is ${area}`); 
})(10, 51);


