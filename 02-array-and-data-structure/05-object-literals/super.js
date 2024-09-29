let x;

const person = {
    name : 'John doe',
    age: 30,
    isAdmin : true,
    address: {
        street: '123 Main Street',
        city: 'Boston',
        state: 'MA',
    },
    hobbies : ['music', 'sports']
};


x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];



person.name = 'Jane doe';
person['isadmin'] = false

delete person.age;

person.hasChildren = true;

person.greet = function(){
    console.log(`Hello My name is ${this.name}`);
}

person.greet();


const person2 = {
    'first name': 'Brad',
    'last name': 'Traversy'
}

x = person2['first name'];

console.log(x);

