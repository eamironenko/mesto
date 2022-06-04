import {
  initialCards, popupEdit, popupAdd, popupImage, buttonEdit, buttonAdd,
  profileForm, addCardForm, inputName, inputProf, profileName, profileProfession, 
  cardsContainer, photoSelector, titleImageSelector
} from './constants.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import '../page/index.css';
import Api from '../scripts/Api.js';

const parameter = {
  urlUser: 'https://nomoreparties.co/v1/cohort-42/users/me',
  urlCards: 'https://mesto.nomoreparties.co/v1/cohort-42/cards',
  headers: {
    authorization: 'a424a2e2-b3e0-48b0-ade8-2a601f78bd48',
    'Content-Type': 'application/json' 
  }};


const api = new Api(parameter);
api.getUserInformation()
  .then((res) => {console.log(res)})

// ВАЛИДАЦИЯ ФОРМ:
//______________________________________________________________
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();
const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();

//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//______________________________________________________________
const userInfo = new UserInfo({ profileName, profileProfession });
const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    console.log(formData)
    api.editProfileForm(formData)
      .then((data) => {
          const userValues = {
          name: data.name,
          profession: data.about
        }
        userInfo.setUserInfo(userValues);
        popupWithFormProfile.close();
      })
      .catch((err) => { console.log(err) })     
  }
});
popupWithFormProfile.setEventListeners();

buttonEdit.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputProf.value = currentUserInfo.profession;  
  formProfileValidator.resetForm();
  popupWithFormProfile.openPopup();
});

//ФУНКЦИИ КАРТОЧЕК
//_____________________________________________________________
function handleLikeClick(element, idCard) {
  if (element.querySelector('.element__like_active')) {
    api.deleteLikeCardElement(idCard)
    .then((data) => {
      element.querySelector('.element__like').classList.remove('element__like_active');
      element.querySelector('.element__like-counter').textContent = data.likes.length;
    })
    .catch((err) => { console.log(err) })
  } else {
    api.likeCardElement(idCard)
    .then((data) => {
      element.querySelector('.element__like').classList.add('element__like_active');
      element.querySelector('.element__like-counter').textContent = data.likes.length;
    })
    .catch((err) => { console.log(err) })
  }
}

function handleCardClick(link, title) {
  popupWithImage.openImage(title, link);
}



// ДОБАВЛЕНИЕ ИСХОДНОГО МАССИВА КАРТОЧЕК
//_______________________________________________________________
function createCard(item) {
  const card = new Card(item, '#card-template', handleCardClick, handleLikeClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item), 'end');
  }
}, cardsContainer);

api.getInitialCards()
  .then((data) => {
    console.log(data)
    const defaultCardList = new Section({
      items: data,
      renderer: (item) => {
        defaultCardList.addItem(createCard(item), 'end');
      }
    }, cardsContainer);
    defaultCardList.renderItems();
  })
  .catch((err) => { console.log(err) })


// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
//________________________________________________________________
const popupWithFormCard = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    console.log(formData);
    const newCard = {
      name: formData.place,
      link: formData.link
    }
    api.addNewCard(newCard)
      .then((data) => { 
        console.log(data),
        cardList.addItem(createCard(data), 'start') })
      .catch((err) => { console.log(err) })

    formAddCardValidator.disableButton();
    formAddCardValidator.resetForm();
    popupWithFormCard.close();
  }
});

cardList.renderItems();
popupWithFormCard.setEventListeners();  

//iMAGE POPUP
//__________________________________________________________________
const popupWithImage = new PopupWithImage(popupImage, photoSelector, titleImageSelector);
popupWithImage.closePopup();

buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  popupWithFormCard.openPopup();
});