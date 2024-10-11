 const numbers = [1,2,3,4,5,6 ,7, 8,9 ,10];

 const doubledNumbers = numbers.map((number) => number * 2)
 
 console.log(doubledNumbers);

 
//  Same wit foreach 

const doublesNumbers2 = [];


numbers.forEach((number) => {
    doublesNumbers2.push(number * 2);
})


console.log(doublesNumbers2);



const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];


const companyNames = companies.map((company) => company.name)


console.log(companyNames);



// Create n array with comapny and category 

const compsnyInfo = companies.map((company) => {
    return [company.name, company.category]
})

console.log(compsnyInfo);



// create an array of object with the name and the length of each companies in eyar


const compsnyInfoObj = companies.map((company) => {
    return {name : company.name, length : company.end - company.start}
})

console.log(compsnyInfoObj);




// Chain Map method 

const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2)

const squareAndDouble2 = numbers
.map(function (number) {
    return Math.sqrt(number);
})
.map(function (sqrt) {
    return sqrt * 2
})
.map(function (sqrtdoubled) {
    return sqrtdoubled * 3;
})

console.log(squareAndDouble);



// Chaining Different Methonds 


const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2);


console.log(evenDouble);
