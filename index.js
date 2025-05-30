import createItemsList from './js/createItemsList.js';

const shoppingList = document.querySelector('#lista-de-compras');
const addButton = document.querySelector('#adicionar-item');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const foo = createItemsList();
  shoppingList.appendChild(foo);
  emptyListVerification();
});

const emptyListMsg = document.querySelector('.empty-list-msg');
function emptyListVerification() {
  const itemsList = shoppingList.querySelectorAll('li');
  if (itemsList.length === 0) {
    emptyListMsg.style.display = 'block';
  } else {
    emptyListMsg.style.display = 'none';
  }
}

emptyListVerification();
