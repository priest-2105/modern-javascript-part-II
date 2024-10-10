const age = 13;


// using an if statement 

if ( age >=18){
    console.log('you can vote');
}else{
    console.log('you can not vote');
    }


// Using a Tenary Operator

age >= 18 ? console.log('you can vote') : console.log('you can not vote');



// Assigning a condiational value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote' : 'You cannot Vote';


console.log(canVote);
console.log(canVote2);



// <Muiltuple statements


// const auth = true;

// let redirect

// if (auth) {
//     alert('welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('access denied');
//     redirect = '/login';
// }



const redirect = auth ? ( alert('wecome to the dashboard '), 'dashboard') : (alert('access denied'), '/login')


console.log(redirect);


auth ? console.log('welome to th edahsboad') : null;

auth && console.log('welcome to the dashboard');
