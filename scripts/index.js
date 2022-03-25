//*открытие/закрытие Popup*/

const popupElement = document.querySelector('.popup');
const navButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const ESC_KEY = "Escape";
const formElement = document.querySelector('.popup__content');
const currentName = document.querySelector('.profile__name');
const currentProf = document.querySelector('.profile__subtitle');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputProf = formElement.querySelector('.popup__input_type_profession');
const saveButton = document.querySelector('.popup__save-button');

function openPopup() {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyUp);
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyUp);
    formElement.classList.remove('popup_opened');
}

function onDocumentKeyUp(event){
    if (event.key === ESC_KEY) {
        closePopup();
    }
}

navButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

/*Ввод данных и сохранение формы*/

inputName.value = "Жак-Ив Кусто";
inputProf.value = "Исследователь океана";

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    currentName.textContent = inputName.value;
    currentProf.textContent = inputProf.value;
}

formElement.addEventListener('submit', handleProfileFormSubmit);
saveButton.addEventListener('click', closePopup);