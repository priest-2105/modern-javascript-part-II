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