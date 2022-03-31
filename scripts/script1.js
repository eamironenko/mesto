const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 



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



