let x;


// Step One 
const library = [
    {
        title: 'My book',
        author: 'Bailey',
        status : {
            own :   true,
            reading : false,
            read : false,
        }
    },
    {
        title: 'The man',
        author: 'priest',
        status : {
            own :   true,
            reading : false,
            read : false,
        }
    },
    {
        title: 'Giant',
        author: 'Fawaz',
        status : {
            own :   true,
            reading : false,
            read : false,
        }
    }
]


// Step Two 

// library[0].status.read = true
// library[1].status.read = true
// library[2].status.read = true

for(i = 0; i < library.length; i++){
    library[i].status.read = true
}

x = library



// Step Three 

  const { title: firstbook } = library[0];


 console.log(firstbook);


// Step Four 

const libraryJson = JSON.stringify(library)


console.log(libraryJson);
