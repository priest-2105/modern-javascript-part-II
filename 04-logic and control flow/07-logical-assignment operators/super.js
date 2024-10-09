 console.log(10>  20 && 30 > 15 && 40 > 30);

 console.log(10 > 20 || 30 > 15);
 


//  && - will return firs falsy value or h elast value 

let a;




a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 20 && 30;




console.log(a);


const posts = ['Post One', 'Post Two'];

postMessage.length > 0 && console.log(posts[0]);



// || - will return first truthy value or last value

let b;


b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);


//  ?? - Reutrns th eright side operand when th eleft is null or undefined

let c ;


c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = 0 ?? 20;
c = '' ?? 20;

console.log(c);


