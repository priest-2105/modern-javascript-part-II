//  Default Parameters
function registerUser(user = 'bot'){
    // if(!user){
    //     user = 'bot';
    // }

    return user + ' is registered'
}

console.log(registerUser('john'));



function sum(...numbers){
    let total = 0;
    for(i = 0; i < numbers.length; i++){
        total += parseInt(numbers[i]);
      
    }  return total;
}


const result = sum(1,2,3,4,5)

console.log(result);


// Object as Params

function loginUser(){
    return `The User ${user.name} with the id of ${user.id} is logged innerHeight`
}

const user = {
    name: 'John Doe', 
    id: 1
};


console.log(loginUser());

console.log(
    loginUser({
        name: 'Jane Doe',
         id: 2
    })
);


// Array as Param

function passArray(arr) {

    const randomarr = arr[Math.floor(Math.random() * arr.length)];
    return randomarr;
}

const arrresult = passArray(['john', 'miguel', 'fred']);

console.log(arrresult);



