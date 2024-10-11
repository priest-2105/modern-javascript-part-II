 const numbers  = [1,2,3,4,5,6,7,8,9,10];

//  const evennumbers  = numbers.filter((number) => {return number % 2 === 0 });
//  const oddnumbers  = numbers.filter((number) => {return number % 3 === 0 });

//  console.log(evennumbers);
//  console.log(oddnumbers);
 


//  for foreach 

// let evennumbers;
// numbers.forEach((number) => {

//         if (number % 2 === 0){
//             evennumbers.push(number);
//         }
// });

// console.log(evennumbers);



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
  

//   Get only retail companines 

const retailCompanies = companies.filter((company) => {
    return company.category === 'Retail';
})

console.log(retailCompanies);


// Get companies that started in or  after 1980 and ended in or before 2005

const oldCompanies = companies.filter((company) => {
    return company.start >= 1980 && company.end <= 2005 ;
})

console.log(oldCompanies);



// Get companies that lasted 10 years or more

const strongCompanies = companies.filter((company) => {
    return company.end - company.start >= 10 ;
})

console.log(strongCompanies);