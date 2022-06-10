import {
  popupEdit, popupAdd, popupImage, popupAvatar, buttonEdit, buttonAdd,
  profileForm, addCardForm, inputName, inputProf, profileName, profileProfession,
  cardsContainer, photoSelector, titleImageSelector, avatarSelector, avatarForm, popupDelete,
  buttonAvatar, 
} from './constants.js';
import Card from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithSubmit from './PopupWithSubmit.js';
import UserInfo from './UserInfo.js';
import '../page/index.css';
import Api from '../scripts/Api.js';

let currentCard = null;
let userId = null;

const api = new Api({
  headers: {
    authorization: 'a424a2e2-b3e0-48b0-ade8-2a601f78bd48',
    'Content-Type': 'application/json'
  }
});


//ЗАПРОС ДАННЫХ ПОЛЬЗОВАТЕЛЯ
//______________________________________________________________
const userInfo = new UserInfo({ profileName, profileProfession, avatarSelector });
api.getUserInformation()
  .then((data) => {
    console.log(data)
    userInfo.setUserInfo({
      name: data.name,
      profession: data.about,
      avatar: data.avatar
    });
    userId = data._id;
  })
  .catch((err) => { console.log(err) })


// ДОБАВЛЕНИЕ МАССИВА КАРТОЧЕК
//_______________________________________________________________
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item), 'end');
  }
}, cardsContainer);

api.getInitialCards()
  .then((data) => { 
    cardList.renderItems(data);
  })
  .catch((err) => { console.log(err) })


// POPUP: ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ 
//________________________________________________________________
const popupWithFormCard = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    console.log(formData);
    popupWithFormCard.renderLoading(true);
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
      .finally(() => {
        popupWithFormCard.renderLoading(false);
      })

    formAddCardValidator.disableButton();
    formAddCardValidator.resetForm();
    popupWithFormCard.close();
  }
});

popupWithFormCard.setEventListeners();
buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  popupWithFormCard.openPopup();
});

//POPUP: iMAGE
//__________________________________________________________________
const popupWithImage = new PopupWithImage(popupImage, photoSelector, titleImageSelector);
popupWithImage.close();


//POPUP: АВАТАР
//_____________________________________________________________
const popupWithFormAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  handleFormSubmit: (formData) => {
    popupWithFormAvatar.renderLoading(true);
    api.editUserAvatar(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => { console.log(err) })
      .finally(() => {
        popupWithFormAvatar.renderLoading(true);
        popupWithFormAvatar.close();
      })    
  }
})
popupWithFormAvatar.setEventListeners();
buttonAvatar.addEventListener('click', () => {  
  formAvatarValidator.resetForm();
  avatarForm.reset();
  popupWithFormAvatar.openPopup();
})


//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//______________________________________________________________
const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    popupWithFormProfile.renderLoading(true);
    api.editProfileForm(formData)
      .then((data) => {
        userInfo.setUserInfo({
          name: data.name,
          profession: data.about
        });
      })
      .catch((err) => { console.log(err) })
      .finally(() => {
        popupWithFormProfile.renderLoading(false);
        popupWithFormProfile.close();
      })
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


//POPUP: DELETE 
//__________________________________________________________________
const popupWithSubmit = new PopupWithSubmit({
  popupSelector: popupDelete,
  handleFormSubmit: (data) => {
    popupWithSubmit.renderLoading(true);
    api.handleDeleteCard(data._id)
      .then(() => {
        data.deleteCard()
      })
      .then(() => {
        popupWithSubmit.closePopup()
      })
      .catch((err) => { console.log(err) })
      .finally(() => {
        popupWithSubmit.renderLoading(false);
      })
  }
});
popupWithSubmit.setEventListeners();


//ТЕМПЛЕЙТ КАРТОЧКИ
//_________________________________________________________
function createCard(data) {
  const card = new Card({
    data: data,
    cardSelector: '#card-template',
    userId: userId,
    handleCardClick: (link, title) => {
      popupWithImage.openImage(title, link);
    },
    handleDeleteClick: (data) => {
      currentCard = card
      popupWithSubmit.openPopup(data);
    },

    handleLikeClick: (data) => {
      if (!card.isLiked()) {
        api.handleLikeCard(data._id)
          .then((data) => {
            card.setLikeCount(data);
          })
          .catch((err) => { console.log(err) })
      } else {
        api.handleDislikeCard(data._id)
          .then((data) => {
            card.setLikeCount(data);
          })
          .catch((err) => { console.log(err) })
      }
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}


// ВАЛИДАЦИЯ ФОРМ:
//______________________________________________________________
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();
const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();
const formAvatarValidator = new FormValidator(config, avatarForm);
formAvatarValidator.enableValidation();

