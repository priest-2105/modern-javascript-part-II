let output;

//  Get child Element

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Last Child';

// Get Parent Elements from a child

const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';


// Sibling Elements
const seconditem = document.querySelector('child:nth-child(2');

output = seconditem;
output = seconditem.nextElementSibling;

seconditem.nextElementSibling.style.color= 'green';


console.log(output);

