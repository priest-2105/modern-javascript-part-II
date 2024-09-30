 const post = {
    id : 1,
    title: 'post one',
    body: 'This is the body',
 }

//  Convert to JSON string 
const str = JSON.stringify(post);

console.log(obj);


// Parse JSON
const obj = JSON.parse(str);

const posts = [
    {
    id : 1,
    title: 'post one',
    body: 'This is the body',
    }, 
    {
    id : 2,
    title: 'post Two',
    body: 'This is the body',
    },
]


const str2 = JSON.stringify(posts);

console.log(str);
