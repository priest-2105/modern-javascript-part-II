//  ||= assigns th eright side value only if the left is a falsy valuw

let a = false;

if (!a){
    a = 20;
}

a= a || 10 ;


a||= 10;



// &&=Assings the right side value only if th eleft is a truthy false

let b = 20;

if (b){
    b = 20
}

b = b && 20;

b &&= 20;


console.log(b);



// ??= assigns th eright side valye only if th eleft is null or undefined


let c = null;


if (c = null || c === undefined) {
     c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
