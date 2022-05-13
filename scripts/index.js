//Popups:
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');
const popupList = Array.from(document.querySelectorAll('.popup'));

//Кнопоки открытия:
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

//Кнопоки закрытия:
const buttonCloseProfile = popupEdit.querySelector('.popup__close-button');
const buttonCloseCard = popupAdd.querySelector('.popup__close-button');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');
const ESC_KEY = "Escape";

//Редактирование профиля страницы:
const profileForm = popupEdit.querySelector('.popup__content_profile-form');
const addCardForm = popupAdd.querySelector('.popup__content_card-form');
const currentName = document.querySelector('.profile__name');
const currentProf = document.querySelector('.profile__subtitle');
const inputName = profileForm.querySelector('.popup__input_type_name');
const inputProf = profileForm.querySelector('.popup__input_type_profession');

//Добавление карточки
const elementsContainer = document.querySelector('.elements');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const titleImagePopup = popupImage.querySelector('.popup__photo-title');
const photoPopup = popupImage.querySelector('.popup__photo');

//СКРИПТЫ:
import { initialCards } from './cardsSet.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';

//ЗАКРЫТИЕ ПО ESC
//------------------------------------------------------------
function handleEscapeKey(evt) {
  if (evt.key === ESC_KEY) {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  };
};

//ОТКРЫТИЕ И ЗАКРЫТИЕ
//-------------------------------------------------------------
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscapeKey);
}

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscapeKey);
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
function openPopupEditProfile() {
  inputName.value = currentName.textContent;
  inputProf.value = currentProf.textContent;
  openPopup(popupEdit);
};

buttonEdit.addEventListener('click', () => {
  formProfileValidator.resetForm();
  profileForm.reset();
  openPopupEditProfile();
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = inputName.value;
  currentProf.textContent = inputProf.value;
  closePopup(popupEdit);
};

profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonCloseProfile.addEventListener('click', () => closePopup(popupEdit));

//POPUP: ДОБАВЛЕНИE КАРТОЧКИ (закрытие/открытие)
//-------------------------------------------------------------
function openPopupAddCards() {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  openPopup(popupAdd);
};
buttonAdd.addEventListener('click', openPopupAddCards); //это сабмит
buttonCloseCard.addEventListener('click', () => closePopup(popupAdd)); //это крестик

//ВСТАВКА И ДОБАВЛЕНИЕ КАРТОЧЕК
//-------------------------------------------------------------
function createCard(item) {
  const card = new Card(item, '#card-template', handleOpenImage);
  const cardElement = card.generateCard();
  return cardElement
}

initialCards.forEach((item) => {
  elementsContainer.prepend(createCard(item));
});

//ДОБАВЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ SUBMIT
//----------------------------------------------------------------------
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlace.value;
  newCard.link = inputLink.value;
  elementsContainer.prepend(createCard(newCard));
  closePopup(popupAdd);
  evt.target.reset();
  formAddCardValidator.disableButton();
};

addCardForm.addEventListener('submit', handleAddFormSubmit);

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
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();

const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();