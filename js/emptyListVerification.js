const emptyListMsg = document.querySelector('.empty-list-msg');
function emptyListVerification(shoppingList) {
  const itemsList = shoppingList.querySelectorAll('li');
  if (itemsList.length === 0) {
    emptyListMsg.style.display = 'block';
  } else {
    emptyListMsg.style.display = 'none';
  }
}

export default emptyListVerification;
