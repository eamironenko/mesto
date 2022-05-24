import {
  initialCards, popupEdit, popupAdd, popupImage, buttonEdit, buttonAdd,
  profileForm, addCardForm, inputName, inputProf, elementsContainer, cardsContainer
} from './constants.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import '../page/index.css';


//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//----------------------------------------------------
const openPopupProfile = new Popup(popupEdit);
const popupUserInfo = new UserInfo({});
popupUserInfo.getUserInfo();
//-----------------------------------------------------

buttonEdit.addEventListener('click', () => {
  const currentUserInfo = popupUserInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputProf.value = currentUserInfo.profession;
   formProfileValidator.resetForm();
  openPopupProfile.openPopup();
});

const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    const userValues = {
      name: formData.name,
      profession: formData.profession
    }
    const setInfo = new UserInfo(userValues);
    setInfo.setUserInfo();
    popupWithFormProfile.close();
  }
});

popupWithFormProfile.setEventListeners();


//ДОБАВЛЕНИЕ КАРТОЧКИ
//-------------------------------------------------------------
function createCard(item) {
  const card = new Card(item, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsContainer);


function handleCardClick(link, title) {
  const popupWithImage = new PopupWithImage(popupImage, title, link);
  popupWithImage.openImage();
}

const openPopupAddCard = new Popup(popupAdd);
buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  openPopupAddCard.openPopup();
});

//ЗАПОЛНЕНИЕ ФОРМЫ
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


//ВАЛИДАЦИЯ ФОРМ:
//----------------------------------------------------------------------
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();
const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();
