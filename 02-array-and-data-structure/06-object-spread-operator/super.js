let x;

const todo = new Object();

 todo.id = 1;
 todo.name = 'Buy milk';
 todo.completed = true;

 x = todo;

 const person = {
    address : {
        coords : {
            lat: 42.9384,
            lng: -71.6598
        }
    }
 };

 x  = person.address.coords.lat;

 const obj1 = { a: 1,b: 2 };
 const obj2 = { c: 1,d: 2 };

 const obj3 = {...obj1, ...obj2};
 const obj4 = Object.assign({}, obj1, obj2);

 const todos = [
    {id: 1, name : 'Buy Milk'},
    {id: 2, name : 'Pick up kids'},
    {id: 3, name : 'Take out trash'},
 ]

 x = todos[0].name;

 x = Object.keys(todo);

 x = Object.keys(todo);

 x = Object.values(todo)

 x = Object.entries(todo);

 x = todo.hasOwnProperty('name');

 

 console.log(x);
 