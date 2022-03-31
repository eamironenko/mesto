
//Popups:
const popupElement = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
//const popupImage = document.querySelector('.popup_image')

//Кнопоки:
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const ESC_KEY = "Escape";

//Редактирование профиля страницы:
const formElement = document.querySelector('.popup__content');
const currentName = document.querySelector('.profile__name');
const currentProf = document.querySelector('.profile__subtitle');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputProf = formElement.querySelector('.popup__input_type_profession');

//Редактирование карточки
const placeCard = document.querySelector('.popup__input_type_place');
const linkCard = document.querySelector('.popup__input_type_link');

//Открытие и закрытие Popup
//--------------------------------------------------------------
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyUp);
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyUp);
}

function onDocumentKeyUp(event){
    if (event.key === ESC_KEY) {
        closePopup();
    }
}

//POPUP: РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//---------------------------------------------------------------

function popupEditProfile() {
    inputName.value = currentName.textContent;
    inputProf.value = currentProf.textContent;
    openPopup(popupEdit);
};

editButton.addEventListener('click', popupEditProfile);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    currentName.textContent = inputName.value;
    currentProf.textContent = inputProf.value;
    closePopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit);


//POPUP: ДОБАВЛЕНИЕ КАРТОЧКИ
//-------------------------------------------------------------------

function popupAddCards() {
    placeCard.value = '';
    linkCard.value = '';
    openPopup(popupAdd);   
};

addButton.addEventListener('click', popupAddCards);

//profileClose.addEventListener('click', () => {
//    closePopup(profilePopup);
//})


/*-------------------------------------------------------------------*/


