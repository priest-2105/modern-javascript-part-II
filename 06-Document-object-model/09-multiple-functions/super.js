 

function createNewItem(item){

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    constButton = createButton('remove-item btn-link text-red');

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

    console.log(li.innerHTML);
    
}


function createButton(classes){
  const button = document.createElement('button');

  button.className = classes;

}


function createIcon(classes){
  
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';


}


createNewItem('Cheese');