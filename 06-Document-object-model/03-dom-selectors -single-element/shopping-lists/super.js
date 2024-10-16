// document.getElementById

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute);

// set Attributes
document.getElementById('app-title').title = 'ShoppingList';
document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');
console.log(title);

//  Get/Change content

console.log(title.textContent);

title.textContent = 'Hello World';
title.innerText = 'Hello World';
title.innerHTML = '<strong> Shopping List </strong>';

// Change Style 

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//  document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('.input[type="text]'));
console.log(document.querySelector('li:nth-child(2)').innerText);
const secondItem = document.querySelector('li:nth-child(2)')
secondItem.style.innerText = 'Apple Juice';
secondItem.style.color = 'red';

//  use these Methods on other Elements 

const list = document.querySelector('ul');
console.log(list);
const firstItem = document.querySelector('li');
firstItem.style.color = 'blue';