export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //Popups:
export const popupElement = document.querySelector('.popup');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupImage = document.querySelector('.popup_image');
export const popupList = Array.from(document.querySelectorAll('.popup'));

//Кнопоки открытия:
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');

//Кнопоки закрытия:
export const closeButton = document.querySelector('.popup__close-button');
export const buttonCloseProfile = popupEdit.querySelector('.popup__close-button');
export const buttonCloseCard = popupAdd.querySelector('.popup__close-button');
export const buttonCloseImage = popupImage.querySelector('.popup__close-button');
export const ESC_KEY = "Escape";

//Редактирование профиля страницы:
export const profileForm = popupEdit.querySelector('.popup__content_profile-form');
export const addCardForm = popupAdd.querySelector('.popup__content_card-form');
export const currentName = document.querySelector('.profile__name');
export const currentProf = document.querySelector('.profile__subtitle');
export const inputName = profileForm.querySelector('.popup__input_type_name');
export const inputProf = profileForm.querySelector('.popup__input_type_profession');

//Добавление карточки
export const elementsContainer = document.querySelector('.elements');
export const cardsContainer = '.elements'; //это контейнер
export const inputPlace = document.querySelector('.popup__input_type_place');
export const inputLink = document.querySelector('.popup__input_type_link');
export const titleImagePopup = popupImage.querySelector('.popup__photo-title');
export const photoPopup = popupImage.querySelector('.popup__photo');//