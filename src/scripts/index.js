import {
  initialCards, popupEdit, popupAdd, popupImage, popupDelete, buttonEdit, buttonAdd,
  profileForm, addCardForm, inputName, inputProf, profileName, profileProfession,
  cardsContainer, photoSelector, titleImageSelector, avatarPhoto
} from './constants.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithSubmit from './PopupWithSubmit.js';
import UserInfo from './UserInfo.js';
import '../page/index.css';
import Api from '../scripts/Api.js';

const parameter = {
  urlUser: 'https://nomoreparties.co/v1/cohort-42/users/me',
  urlCards: 'https://mesto.nomoreparties.co/v1/cohort-42/cards',
  headers: {
    authorization: 'a424a2e2-b3e0-48b0-ade8-2a601f78bd48',
    'Content-Type': 'application/json'
  }
};


const api = new Api(parameter);
let userId = {}

api.getUserInformation()
  .then((data) => {
    console.log(data)
    userInfo.setUserInfo({
      name: data.name,
      profession: data.about
    });
    userId = data._id;
    //console.log(userId);
    avatarPhoto.src = data.avatar;
  })
  .catch((err) => { console.log(err) })


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



//ТЕМПЛЕЙТ КАРТОЧКИ
//_______________________________________________________________
/*function createCard(item) {
  const card = new Card(item, '#card-template', userId, handleCardClick, handleLikeClick, handleDeleteClick);
  const cardElement = card.generateCard();
  return cardElement;
}*/

function createCard(item) {
  const card = new Card({
    data: item,
    cardSelector: '#card-template',
    userId: userId,
    handleCardClick: (link, title) => {
      popupWithImage.openImage(title, link)
    },
    handleDeleteClick: (card) => {
      PopupWithSubmit.openPopup(card)
    },
    handleLikeClick: (card) => {
      if (card.querySelector('.element__like_active')) {
        api.handleDislikeCard(card._id)
          .then((data) => {
            card.deleteLike(data.likes.length)
          })
          .catch((err) => { console.log(err) });
      } else {
        api.handleLikeCard(card._id)
          .then((data) => {
            card.addLike(data.likes.length)
          })
          .catch((err) => { console.log(err) })
      }
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}


// ДОБАВЛЕНИЕ МАССИВА КАРТОЧЕК
//_______________________________________________________________
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
          cardList.addItem(createCard(data), 'start')
      })
      .catch((err) => { console.log(err) })

    formAddCardValidator.disableButton();
    formAddCardValidator.resetForm();
    popupWithFormCard.close();
  }
});
cardList.renderItems();
popupWithFormCard.setEventListeners();

buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  popupWithFormCard.openPopup();
});


//iMAGE POPUP
//__________________________________________________________________
const popupWithImage = new PopupWithImage(popupImage, photoSelector, titleImageSelector);
popupWithImage.closePopup();

//DELETE POPUP
//__________________________________________________________________
const popupWithSubmit = new PopupWithSubmit({
  PopupSelector: popupDelete,
  handleFormSubmit: (card) => {
    api.handleDeleteCard(card._id)
      .then(() => {
        card.deleteCard()
      })
      .then(() => {
        popupWithSubmit.closePopup()
      })
      .catch((err) => { console.log(err) })
  }
});
popupWithSubmit.setEventListeners();












//ФУНКЦИИ КАРТОЧЕК
//_____________________________________________________________
/*function handleCardClick(link, title) {
  popupWithImage.openImage(title, link);
}*/

/*function handleLikeClick(card) {
  if (card.querySelector('.element__like_active')) {
    api.handleDislikeCard(card._id)
      .then((data) => {
        thisCard.deleteLike(data.likes.length)
      })
      .catch((err) => { console.log(err) });
  } else {
    api.handleLikeCard(card._id)
      .then((data) => {
        thisCard.addLike(data.likes.length)
      })
      .catch((err) => { console.log(err) })
  }
};*/



/*function handleDeleteClick(card) {
  PopupWithSubmit.openPopup(card)
}*/
