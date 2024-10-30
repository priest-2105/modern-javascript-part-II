

function insertAfterItem(newEl, existingEl){

  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

}
  const li = document.createElement('li');
  li.textContent = 'insetBeforeItem';

  const firstitem = document.querySelector(`${item}:nth-child(1)`)

  insertBefore(element, item);




insertBeforeItem(li, firstitem);