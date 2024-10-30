// insert Adjacent Elemnt  Example


function insertElement(){
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insetAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}


// insert Adjacent Text Example

function insertText(){
  const item = document.querySelector('li:first-first-child');


  item.insertAdjacentElement('afterend', item);
}



// insert Adjacent HTML Example


function insertHTML(){
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentElement('beforebegin', `<h2>insert adjacent html</h2>`);
}


// Insert Before item 
function insertElement(){
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insetAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}



function insertBeforeItem(){
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insetBeforeItem';

  const thirditem = document.querySelector('li:nth-child(3)')

  ul.insertBefore(li, thirditem)

}




// insert Adjacent Before  Example






insertElement();
insertText();
insertHTML();
insertBeforeItem();