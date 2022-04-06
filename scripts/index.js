//Popups:
const popupElement = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
//const popupImage = document.querySelector('.popup_image');

//Кнопоки открытия:
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelector('.popup__save-button');
const ESC_KEY = "Escape";
//Кнопоки закрытия:
const closeButton = document.querySelector('.popup__close-button');
const closeButtonProfile = popupEdit.querySelector('.popup__close-button');
const closeButtonCard = popupAdd.querySelector('.popup__close-button');
//const closeButtonImage = popupImage.querySelector('.popup__close-button');

//Редактирование профиля страницы:
const formElement = document.querySelector('.popup__content');
const currentName = document.querySelector('.profile__name');
const currentProf = document.querySelector('.profile__subtitle');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputProf = formElement.querySelector('.popup__input_type_profession');

//Добавление карточки
//--------------------------------------------------------------



//Функции открытия и закрытия Popup
//--------------------------------------------------------------
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyUp);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyUp);
}

function onDocumentKeyUp(event){
    if (event.key === ESC_KEY) {
        closePopup();
    }
}

//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//---------------------------------------------------------------

function popupEditProfile() {
    inputName.value = currentName.textContent;
    inputProf.value = currentProf.textContent;
    openPopup(popupEdit);
};

editButton.addEventListener('click', popupEditProfile);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    currentName.textContent = inputName.value;
    currentProf.textContent = inputProf.value;
    closePopup(popupEdit);
}

formElement.addEventListener('submit', handleProfileFormSubmit);
closeButtonProfile.addEventListener('click', () => closePopup(popupEdit));


//POPUP: ДОБАВЛЕНИE КАРТОЧКИ (закрытие/открытие)
//-----------------------------------------------------------------
function popupAddCards() {
    openPopup(popupAdd);
};

addButton.addEventListener('click', popupAddCards); //это сабмит
closeButtonCard.addEventListener('click', () => closePopup(popupAdd)); //это крестик

//ШЕСТЬ КАРТОЧЕК "ИЗ КОРОБКИ":
//------------------------------------------------------------------
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

//ПЕРЕМЕННЫЕ ДЛЯ КАРТОЧЕК
//-------------------------------------------------------------------
const elementsContainer = document.querySelector('.elements');
const element = document.querySelectorAll('.element');

//МАКЕТ КАРТОЧКИ ДЛЯ СТРАНИЦЫ
//---------------------------------------------------------------------
function createCard (item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = item.name;
    cardElement.querySelector('.element__photo').src = item.link;
  
    cardElement.querySelector('.element__like').addEventListener('click', like);
    /*cardElement.querySelector('.element_delete').addEventListener('click', del);
    cardElement.querySelector('.element__photo').addEventListener('click', () => previewPicture(item.name, item.link))*/
    return cardElement;
  };

//ВСТАВКА КАРТОЧКИ ИЗ МАССИВА
//---------------------------------------------------------------------
initialCards.forEach(function (item) {
    elementsContainer.append(createCard(item));
  });

//ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ НА СТРАНИЦУ
//----------------------------------------------------------------------
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const newCard = {
    name: inputPlace.value,
    link: inputLink.value
};

function addCard (newCard) {      
    elementsContainer.prepend(createCard(newCard));
};

//ДОБАВЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ SUBMIT
//----------------------------------------------------------------------
function handleAddFormSubmit(evt) {
    evt.preventDefault();
    newCard.name = inputPlace.value;
    newCard.link = inputLink.value;
    addCard(newCard);
    inputPlace.value = '';
    inputLink.value = '';
    closePopup(popupAdd);
}

//ВСТАВКА ЧЕРЕЗ ФОРМУ
const formElementAdd = popupAdd.querySelector('.popup__content');
formElementAdd.addEventListener('submit', handleAddFormSubmit);

//ЛАЙК
//----------------------------------------------------------------------
function like(event) {
    event.target.classList.toggle('element__like_active', true);
};

element.forEach(function (item) {
    item.querySelector('.element__like').addEventListener('click', like)
});

//УДАЛЕНИЕ КАРТОЧКИ
//----------------------------------------------------------------------









