const firstName = 'john';
const lastName = 'Doe';
const age = 30;


const person = {
    firstName,
    lastName,
    age,
}



console.log(person.age);



// Destructing 


const todo = {
    id: '1',
    title: 'take out trash',
    user: {
        name: 'john',
    }
}


const {id: todoId, title, user : {name} }  = todo;

console.log(id, title, user, name);


// Destructing Arrays 

const numbers = [47, 85, 36, 57, 68]

const [ first, second, ...rest ] = numbers

console.log(first, second, rest);
