//Popups:
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');
const popupList = Array.from(document.querySelectorAll('.popup'));

//Кнопоки открытия:
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonSave = document.querySelector('.popup__save-button');
const buttonSaveAdd = popupAdd.querySelector('.popup__save-button')

//Кнопоки закрытия:
const buttonClose = document.querySelector('.popup__close-button');
const buttonCloseProfile = popupEdit.querySelector('.popup__close-button');
const buttonCloseCard = popupAdd.querySelector('.popup__close-button');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');
const ESC_KEY = "Escape";

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
const formElementEdit = popupEdit.querySelector('.popup__content');
const titleImagePopup = popupImage.querySelector('.popup__photo-title');
const photoPopup = popupImage.querySelector('.popup__photo');

//СКРИПТЫ:
import { initialCards } from './cardsSet.js';
import { Card } from './card.js';
import { FormValidator, config } from './FormValidator.js';

//ЗАКРЫТИЕ ПО ESC
//------------------------------------------------------------
function onDocumentKeyUp(evt) {
  if (evt.key === ESC_KEY) {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  };
};

//ОТКРЫТИЕ И ЗАКРЫТИЕ
//-------------------------------------------------------------
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
}

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
}

//ЗАКРЫТИЕ ПО OVERLAY
//-------------------------------------------------------------
popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});

//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//------------------------------------------------------------
function popupEditProfile() {
  inputName.value = currentName.textContent;
  inputProf.value = currentProf.textContent;
  openPopup(popupEdit);
};

buttonEdit.addEventListener('click', () => {
  formProfileValidator.resetForm();
  formElementEdit.reset();
  popupEditProfile();
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = inputName.value;
  currentProf.textContent = inputProf.value;
  closePopup(popupEdit);
};

formElement.addEventListener('submit', handleProfileFormSubmit);
buttonCloseProfile.addEventListener('click', () => closePopup(popupEdit));

//POPUP: ДОБАВЛЕНИE КАРТОЧКИ (закрытие/открытие)
//-------------------------------------------------------------
function popupAddCards() {
  formAddCardValidator.resetForm();
  formElementAdd.reset();
  openPopup(popupAdd);
};
buttonAdd.addEventListener('click', popupAddCards); //это сабмит
buttonCloseCard.addEventListener('click', () => closePopup(popupAdd)); //это крестик


//ВСТАВКА КАРТОЧКИ ИЗ МАССИВА
//-------------------------------------------------------------
initialCards.forEach((item) => {
  const card = new Card(item, '#card-template', handleOpenImage);
  const cardElement = card.createCard();
  elementsContainer.prepend(cardElement);
});

//ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ В НАЧАЛО СТРАНИЦЫ 
//----------------------------------------------------------------------
function addCard(newCard, cardElement) {
  const card = new Card(newCard, '#card-template', handleOpenImage);
  cardElement = card.createCard();
  elementsContainer.prepend(cardElement);
  return cardElement;
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
  formAddCardValidator.disableButton();
};

formElementAdd.addEventListener('submit', handleAddFormSubmit);

//УВЕЛИЧЕНИЕ ФОТОГРАФИИ
//----------------------------------------------------------------------
export function handleOpenImage(title, link) {
  photoPopup.src = link;
  photoPopup.alt = title;
  titleImagePopup.textContent = title;
  openPopup(popupImage);
}

buttonCloseImage.addEventListener('click', () => closePopup(popupImage)); //крестик


//ВАЛИДАЦИЯ ФОРМ:
//-----------------------------------------------------------------------
const formProfile = popupEdit.querySelector('.popup_profile-form');
const formAddCard = popupAdd.querySelector('.popup_addCard-form');

const formAddCardValidator = new FormValidator(config, formAddCard);
formAddCardValidator.enableValidation();

const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation();

