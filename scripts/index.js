/*открытие/закрытие Popup*/

const popupElement = document.querySelector('.popup');
const navButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const ESC_KEY = "Escape";
const formElement = document.querySelector('.popup__content');
const currentName = document.querySelector('.profile__name');
const currentProf = document.querySelector('.profile__subtitle');
const inputName = formElement.querySelector('.popup__form-name');
const inputProf = formElement.querySelector('.popup__form-profession');

function openPopup() {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyUp)
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyUp)
}

function onDocumentKeyUp(event){
    if (event.key === ESC_KEY) {
        closePopup();
    }
}

navButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

/*Ввод данных и сохранение формы*/

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    currentName.textContent = inputName.value;
    currentProf.textContent = inputProf.value;
    console.log(currentName);
    console.log(currentProf);
}

formElement.addEventListener('submit', handleProfileFormSubmit);