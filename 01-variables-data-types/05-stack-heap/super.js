//  Values stores on th eStack ( Primitive Values )


const name = 'john';
const age = 30;



// Refrence Values Stores on th eHeap 

const person = {
    name: 'Fawaz',
    age: 40
}


let newName = name
newName = 'Johnathan';


let newPerson = person
newPerson.name = 'bailey'


console.log(name, newName);
console.log(person, newPerson);
