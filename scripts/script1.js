
const cardContainer = document.querySelector('.elements');
const addPopupForm = document.querySelector('.popup__content');

//копируем темплейт на страницу
const createCard = (taskName) => {
    return `<article class="element">
      <img src="${taskLink}" class="element__photo" alt="">
      <div class="element__caption">
        <h2 class="element__title">${taskName}</h2>
        <button type="button" class="element__like"></button>
      </div>
    </article>`
}

const renderAddCards = (taskName) => {
    cardContainer.insertAdjacentHTML('beforebegin',createCard(taskName));
}

const addCards = (event) => {
    event.preventDefault();
    const taskName = input.value;
    
}

//применяем к массиву функцию по созданию карточки с нашим темплейтом
const cards = initialCards.map(function(taskName) {
    return createCard(taskName);
});

cardContainer.insertAdjacentHTML('beforebegin', cards.join(''));
addPopupForm.addEventListener('submit', addCards); 


/*function createCard (item) {
  const cardElement = document.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__photo').src = item.link;    

  //cardElement.querySelector('.element__like').addEventListener('click', like);
  //cardElement.querySelector('.element_delete').addEventListener('click', del);
  //cardElement.querySelector('.element__photo').addEventListener('click', () => previewPicture(item.name, item.link))
  return cardElement;
};

function addCard (newCard, elements) {    
  elements.append(cardElement);
  newElement = createCard(newCard);
} 

function handleAddFormSubmit(evt) {
  evt.preventDefault();
    
  addCard(newCard, elements);
  inputPlacename.value = '';
  inputLink.value = '';
  closePopup(popupAdd); // создание newCard в функцию handler.
}*/


function popupAddCards() {
  //inputPlace.value = '';
  //inputLink.value = '';
  openPopup(popupAdd);   
};


const newCard = {};
newCard.name = inputPlace.value;
newCard.link = inputLink.value;

function addCard (newCard, elementsContainer) {
  const newElement = createCard(newCard);  
  elementsContainer.prepend(newElement);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlace.value,
  newCard.link = inputLink.value;   
  addCard(newCard, elementsContainer);
  inputPlace.value = '';
  inputLink.value = '';
  closePopup(popupAdd); // создание newCard в функцию handler.
}

console.log(newCard.name);
console.log(newCard.link);