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

 x = obj3;

 console.log(x);
 