import {
  popupEdit, popupAdd, popupImage, popupAvatar, buttonEdit, buttonAdd,
  profileForm, addCardForm, inputName, inputProf, profileNameSelector, profileProfessionSelector,
  cardsContainer, photoSelector, titleImageSelector, avatarSelector, avatarForm, popupDelete,
  buttonAvatar, config,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import { FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import Api from '../components/Api.js';

let userId = null;
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'a424a2e2-b3e0-48b0-ade8-2a601f78bd48',
    'Content-Type': 'application/json'
  }
});


//ЗАПРОС ДАННЫХ ПОЛЬЗОВАТЕЛЯ
//______________________________________________________________
const userInfo = new UserInfo({ profileNameSelector, profileProfessionSelector, avatarSelector });

Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then((data) => {
    userInfo.setUserInfo({
      name: data[0].name,
      profession: data[0].about,
      avatar: data[0].avatar
    });
    userId = data[0]._id;
    cardList.renderItems(data[1]);
  })
  .catch((err) => { console.log(err) })


// POPUP: ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ 
//________________________________________________________________
const popupWithFormCard = new PopupWithForm({
  popup: popupAdd,
  handleFormSubmit: (formData) => {
    popupWithFormCard.renderLoading(true);
    const newCard = {
      name: formData.place,
      link: formData.link
    }
    api.addNewCard(newCard)
      .then((data) => {
        cardList.addItemStart(createCard(data))
      })
      .catch((err) => { console.log(err) })
      .finally(() => {
        popupWithFormCard.renderLoading(false);
      })
      .then(() => {        
        popupWithFormCard.closePopup();
      })

    formAddCardValidator.disableButton();
    formAddCardValidator.resetForm();
  }        
});

popupWithFormCard.setEventListeners();
buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetForm();
  addCardForm.reset();
  popupWithFormCard.openPopup();
});


//POPUP: ФОТОГРАФИЯ
//__________________________________________________________________
const popupWithImage = new PopupWithImage(popupImage, photoSelector, titleImageSelector);
popupWithImage.setEventListeners();


//POPUP: АВАТАР
//_____________________________________________________________
const popupWithFormAvatar = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (formData) => {
    popupWithFormAvatar.renderLoading(true);
    api.editUserAvatar(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => { console.log(err) })
      .finally(() => {
        popupWithFormAvatar.renderLoading(true);        
      })
      .then(() => {
        popupWithFormAvatar.closePopup();
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
  popup: popupEdit,
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
      })
      .then(() => {
        popupWithFormProfile.closePopup();
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


//POPUP: УДАЛЕНИЕ 
//__________________________________________________________________
const popupWithSubmit = new PopupWithSubmit({
  popup: popupDelete,
  handleFormSubmit: (data) => {
    popupWithSubmit.renderLoading(true);
    api.handleDeleteCard(data._id)
      .then(() => {
        data.deleteCard()
      })      
      .catch((err) => { console.log(err) })
      .finally(() => {
        popupWithSubmit.renderLoading(false);
      })
      .then(() => {
        popupWithSubmit.closePopup()
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
      popupWithSubmit.openPopup(data);
    },

    handleLikeClick: (data) => {
      if (card.isLiked()) {
        api.handleDislikeCard(data._id)
          .then((data) => {
            card.setLikeCount(data);
          })
          .catch((err) => { console.log(err) })
      } else {
        api.handleLikeCard(data._id)
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

// ТЕМПЛЕЙТ МАССИВА КАРТОЧЕК
//_______________________________________________________________
const cardList = new Section({
  renderer: (item) => {
    cardList.addItemEnd(createCard(item));
  }
}, cardsContainer);

// ВАЛИДАЦИЯ ФОРМ:
//______________________________________________________________
const formAddCardValidator = new FormValidator(config, addCardForm);
formAddCardValidator.enableValidation();
const formProfileValidator = new FormValidator(config, profileForm);
formProfileValidator.enableValidation();
const formAvatarValidator = new FormValidator(config, avatarForm);
formAvatarValidator.enableValidation();