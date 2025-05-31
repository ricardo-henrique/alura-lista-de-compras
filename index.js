import createItemsList from './js/createItemsList.js';
import emptyListVerification from './js/emptyListVerification.js';

const shoppingList = document.querySelector('#lista-de-compras');
const addButton = document.querySelector('#adicionar-item');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const foo = createItemsList();
  shoppingList.appendChild(foo);
  emptyListVerification(shoppingList);
});

emptyListVerification(shoppingList);
