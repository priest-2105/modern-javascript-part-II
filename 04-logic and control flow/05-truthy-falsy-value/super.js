const email = 'text@text.com';


if (email){
    console.log('you passed an email');
}


// Falsy Values
// - False
// - 0
// - "" or '' (Empty string)
// - null
//  - undefined
//  - NaN



const x = false;

if (x){
    console.log('This is truthy');
}else{
    console.log('this is falsy');
}

console.log(Boolean(x));




// Truthy Values
//  - Everything thats not falsy
//  - true
//  - 0 (0 in a string)
//  - '' (space in a string)
//  - 'false' (false in a string)
//  -  [] (empty array)
//  -  {} (empty object)
//  - function() {} (Empty function)

// const x = false;

if (x){
    console.log('This is truthy');
}else{
    console.log('this is falsy');
}

console.log(Boolean(x));


// Truth and Falsy Caveats 

const children = 1;

if (children !== undefined){
    console.log(`you have ${children} children`);
}else {
    console.log(`please enter number of children`);   
}


// Checking for empty array 

const posts = ['pos one ', 'pos two']

if ( posts.length > 0 ){
    console.log('List post');
    }
    else{
    console.log('no post');
    }


    // Checking for empty objects 

const user = {
    name: 'user',
}

if(Object.keys(user).length > 0){
    console.log('list User');
}else{
    console.log('no user');
}


// Loose Equality 

console.log(false == 0);
