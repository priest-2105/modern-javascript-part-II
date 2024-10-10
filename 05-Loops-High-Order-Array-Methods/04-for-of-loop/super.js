const items = ['book', 'table', 'chair', 'kite'];

const users = [
    {name: 'John'},
    {name: 'mike'},
    {name: 'Tim'}
]

for (let item of items){
    console.log(item);
}

for ( const user of users){
    console.log(user.name);
}


//  Loop over strings 

const str = 'Hello World';

for (const letter of str){
    console.log(letter);
}


// Loop over maps 

const map = new Map();

map.set('name', john)
map.set('age0', 30)

for ( const [key, value] of map){
    console.log(key, value);
}


