// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }


for (i = 0 ; i<= 10; i++){
 
        if ( i === 7){
            console.log('7 is my lucky number');
        }else{
    console.log('Number ' +  i );
    }
}


// Nest loops 


for(let i = 1; i <- 10; i++){
    console.log('Number ' + i);

    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);

    }
    
}




//  Loop through an arrray

const names = ['brad', 'blad', 'sarah']

for (let i = 0; i < names.length; i++) {
    if (i ===  2){
    console.log(names[2], ' is the  best');
    }else{
    console.log(names[i]);
    }
    
}