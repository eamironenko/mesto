//Popups:
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

//Кнопоки открытия:
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonSave = document.querySelector('.popup__save-button');

//Кнопоки закрытия:
const buttonClose = document.querySelector('.popup__close-button');
const buttonCloseProfile = popupEdit.querySelector('.popup__close-button');
const buttonCloseCard = popupAdd.querySelector('.popup__close-button');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');

//Редактирование профиля страницы:
const formElement = document.querySelector('.popup__content');
const currentName = document.querySelector('.profile__name');
const currentProf = document.querySelector('.profile__subtitle');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputProf = formElement.querySelector('.popup__input_type_profession');

//Добавление карточки
const cardTemplate = document.querySelector('#card-template').content;
const elementsContainer = document.querySelector('.elements');
const element = document.querySelectorAll('.element');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const elementDelete = document.querySelector('.element__trash');
const formElementAdd = popupAdd.querySelector('.popup__content');
const titleImagePopup = popupImage.querySelector('.popup__photo-title');
const photoPopup = popupImage.querySelector('.popup__photo')

//Функции открытия и закрытия Popup
//--------------------------------------------------------------
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//---------------------------------------------------------------
function popupEditProfile() {
    inputName.value = currentName.textContent;
    inputProf.value = currentProf.textContent;
    openPopup(popupEdit);
};

buttonEdit.addEventListener('click', popupEditProfile);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    currentName.textContent = inputName.value;
    currentProf.textContent = inputProf.value;
    closePopup(popupEdit);
}

formElement.addEventListener('submit', handleProfileFormSubmit);
buttonCloseProfile.addEventListener('click', () => closePopup(popupEdit));

//POPUP: ДОБАВЛЕНИE КАРТОЧКИ (закрытие/открытие)
//-----------------------------------------------------------------
function popupAddCards() {
    openPopup(popupAdd);
};

buttonAdd.addEventListener('click', popupAddCards); //это сабмит
buttonCloseCard.addEventListener('click', () => closePopup(popupAdd)); //это крестик

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

//МАКЕТ КАРТОЧКИ ДЛЯ СТРАНИЦЫ
//---------------------------------------------------------------------
function createCard (item) {    
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__photo');
    cardElement.querySelector('.element__title').textContent = item.name;
    cardImage.alt = item.name;
    cardImage.src = item.link;

    cardElement.querySelector('.element__like').addEventListener('click', like);
    cardElement.querySelector('.element__trash').addEventListener('click', deleteCard);
    cardImage.addEventListener('click', openImage);
    return cardElement;
  };

//ВСТАВКА КАРТОЧКИ ИЗ МАССИВА
//---------------------------------------------------------------------
initialCards.forEach(function (item) {
    elementsContainer.append(createCard(item));
  });

//ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ НА СТРАНИЦУ
//----------------------------------------------------------------------
function addCard (newCard) {
    elementsContainer.prepend(createCard(newCard));
};

//ДОБАВЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ SUBMIT
//----------------------------------------------------------------------
function handleAddFormSubmit(evt) {  
    evt.preventDefault();
    const newCard = {};
    newCard.name = inputPlace.value;
    newCard.link = inputLink.value;
    addCard(newCard);
    closePopup(popupAdd);
    inputPlace.value = '';
    inputLink.value = '';
}

formElementAdd.addEventListener('submit', handleAddFormSubmit);

//ЛАЙК
//----------------------------------------------------------------------
function like(event) {
    event.target.classList.toggle('element__like_active');
};

//УДАЛЕНИЕ КАРТОЧКИ
//----------------------------------------------------------------------
function deleteCard(event) {
    event.target.closest('.element').remove();
};

//УВЕЛИЧЕНИЕ ФОТОГРАФИИ
//----------------------------------------------------------------------
function openImage(event) {
    const photoLink = event.target.src;
    const photoTitle = event.target.alt;
    titleImagePopup.textContent = photoTitle;
    photoPopup.src = photoLink;
    photoPopup.alt = photoTitle;
    openPopup(popupImage);
};

buttonCloseImage.addEventListener('click', () => closePopup(popupImage)); //крестик