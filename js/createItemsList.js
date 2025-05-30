import dayWeekGenerator from './dayWeekGenerator.js';

const inputItem = document.querySelector('#input-item');

let couter = 0;

function createItemsList() {
  if (inputItem.value === '') {
    alert('Pro faver, insira um item');
    return;
  }

  const itemsList = document.createElement('li');
  const containerItemsList = document.createElement('div');
  const inputCheckbox = document.createElement('input');
  const itemName = document.createElement('p');

  containerItemsList.classList.add('lista-item-container');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = `checkbox-${couter++}`;
  itemName.innerText = inputItem.value;

  inputCheckbox.addEventListener('click', () => {
    if (inputCheckbox.checked) {
      itemName.style.textDecoration = 'line-through';
    } else {
      itemName.style.textDecoration = 'none';
    }
  });

  const completeDate = dayWeekGenerator();
  containerItemsList.appendChild(inputCheckbox);
  containerItemsList.appendChild(itemName);

  itemsList.appendChild(containerItemsList);

  const itemData = document.createElement('p');
  itemData.classList.add('texto-data');
  itemData.innerText = completeDate;
  itemsList.appendChild(itemData);

  return itemsList;
}

export default createItemsList;
