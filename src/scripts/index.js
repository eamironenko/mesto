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
const setInfo = new UserInfo({ profileName, profileProfession });
buttonEdit.addEventListener('click', () => {
  const currentUserInfo = setInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputProf.value = currentUserInfo.profession;
  formProfileValidator.enableValidation();
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
    setInfo.setUserInfo(userValues);
    popupWithFormProfile.close();
  }
});

popupWithFormProfile.setEventListeners();

//ДОБАВЛЕНИЕ КАРТОЧКИ
//_______________________________________________________________
function createCard(item) {
  const card = new Card(item, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
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

//ЗАПОЛНЕНИЕ ФОРМЫ
//_________________________________________________________________
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
//__________________________________________________________________
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();
const formProfileValidator = new FormValidator(config, profileForm);