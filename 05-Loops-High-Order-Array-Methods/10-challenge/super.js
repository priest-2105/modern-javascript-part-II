// Chalenge 1 
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];


  

  const youngpeople = [];  
  
  people.filter((person) => {
    
    if (person.age <= 25){
        youngpeople.push ({
            name: person.firstName + person.lastName,
            email: person.email,
        })
    }
  })

  console.log(youngpeople);
  








  // Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumber = numbers.reduce((acc, curnum) => {
    if (curnum > 0){
        acc += curnum;
    }
    return acc;
}, 0)


console.log(positiveNumber);



// Challenge 3
const words = ['coder', 'programmer', 'developer'];


const Capitailizedwords = words.map((word) => {
    return word[0].toLocaleUpperCase() + word.slice(1);
})

console.log(Capitailizedwords);

