export const config = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input-error',
    activeInputErrorClass: 'popup__input-error_active',
    errorClass: 'popup__input_type_error',
  };

//Popups:
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupImage = document.querySelector('.popup_image');
export const popupDelete = document.querySelector('.popup_delete');
export const popupAvatar = document.querySelector('.popup_avatar');
export const popupSelector = '.popup';

//Кнопоки открытия:
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar')
//Редактирование профиля страницы:
export const profileForm = popupEdit.querySelector('.popup__content_profile-form');
export const addCardForm = popupAdd.querySelector('.popup__content_card-form');
export const avatarForm = popupAvatar.querySelector('.popup__content_avatar-form');
export const currentName = document.querySelector('.profile__name');
export const currentProf = document.querySelector('.profile__subtitle');
export const inputName = profileForm.querySelector('.popup__input_type_name');
export const inputProf = profileForm.querySelector('.popup__input_type_profession');

//Добавление карточки
export const elementsContainer = document.querySelector('.elements');
export const cardsContainer = '.elements'; //это контейнер
export const profileNameSelector = '.profile__name';
export const profileProfessionSelector = '.profile__subtitle';
export const photoSelector = '.popup__photo';
export const titleImageSelector = '.popup__photo-title';
export const avatarSelector = '.profile__avatar';