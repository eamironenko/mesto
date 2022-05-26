import {
  initialCards, popupEdit, popupAdd, popupImage, buttonEdit, buttonAdd,
  profileForm, addCardForm, inputName, inputProf, profileName, profileProfession, 
  elementsContainer, cardsContainer, photoSelector, titleImageSelector
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
//______________________________________________________________
const userInfo = new UserInfo({ profileName, profileProfession });
buttonEdit.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputProf.value = currentUserInfo.profession;  
  formProfileValidator.resetForm();
  popupWithFormProfile.openPopup();
});

const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    const userValues = {
      name: formData.name,
      profession: formData.profession
    }
    userInfo.setUserInfo(userValues);
    popupWithFormProfile.close();
  }
});

popupWithFormProfile.setEventListeners();

// ДОБАВЛЕНИЕ КАРТОЧКИ
//_______________________________________________________________
function createCard(item) {
  const card = new Card(item, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item), 'end');
  }
}, cardsContainer);

const popupWithImage = new PopupWithImage(popupImage, photoSelector, titleImageSelector);
popupWithImage.closePopup();

function handleCardClick(link, title) {
  popupWithImage.openImage(title, link);  
}

buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  popupWithFormCard.openPopup();
});

// ЗАПОЛНЕНИЕ ФОРМЫ
//_________________________________________________________________
const popupWithFormCard = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    const newCard = {
      name: formData.place,
      link: formData.link
    }
    cardList.addItem(createCard(newCard), 'start');
    formAddCardValidator.disableButton();
    formAddCardValidator.resetForm();
    popupWithFormCard.close();
  }
});

cardList.renderItems();
popupWithFormCard.setEventListeners();


// ВАЛИДАЦИЯ ФОРМ:
//__________________________________________________________________
const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();
