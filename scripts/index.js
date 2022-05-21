//Popups:
const popup = '.popup';
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
const cardsContainer = '.elements';
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const titleImagePopup = popupImage.querySelector('.popup__photo-title');
const photoPopup = popupImage.querySelector('.popup__photo');

//СКРИПТЫ:
import { initialCards, popupElement, /*cardsContainer */ } from './cardsSet.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';


//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//______________________________________________________

const openPopupProfile = new Popup(popupEdit);
const popupUserInfo = new UserInfo({});
popupUserInfo.getUserInfo();

//------------------------------------------------------
buttonEdit.addEventListener('click', () => {
  const currentUserInfo = popupUserInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputProf.value = currentUserInfo.profession;
      //вытаскиваем значения из шапки
        console.log(inputName.value);
        console.log(inputProf.value);
  
  formProfileValidator.resetForm();
  openPopupProfile.openPopup();  
});

//------------------------------------------------------
const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    const userValues = {
      name: formData.name,
      profession: formData.profession
    }
    console.log(userValues)
    const setInfo = new UserInfo(userValues);
    setInfo.setUserInfo(userValues);
    //popupWithFormProfile.close();     
  }
   
});

popupWithFormProfile.setEventListeners();

//_________________________________________________________

//ДОБАВЛЕНИЕ КАРТОЧКИ ПРИ ПОМОЩИ SECTION

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsContainer);

//создание карточки
//--------------------------------------------------------------
function createCard(item) {
  const card = new Card(item, '#card-template', handleCardClick );
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(link, title) {
  const popupWithImage = new PopupWithImage(popupImage, title, link); 
  popupWithImage.openImage();
}

//--------------------------------------------------------------
const openPopupAddCard = new Popup(popupAdd);
buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  openPopupAddCard.openPopup();  
});

//заполнение формы
//--------------------------------------------------------------
const popupWithFormCard = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    const newCard = {
      name: formData.place,
      link: formData.link
    }
    elementsContainer.prepend(createCard(newCard));    
    formAddCardValidator.disableButton();
    formAddCardValidator.resetForm();
    popupWithFormCard.close();
  }
});
cardList.renderItems();
popupWithFormCard.setEventListeners();
//_____________________________________________________________________

//ВАЛИДАЦИЯ ФОРМ:
//_____________________________________________________________________
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();

const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();

//______________________________________________________________________