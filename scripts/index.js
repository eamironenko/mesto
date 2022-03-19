/*открытие/закрытие Popup*/

const popupElement = document.querySelector('.popup');
const navButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const ESC_KEY = "Escape";

function openPopup() {
    popupElement.classList.add('popup__opened');
    document.addEventListener('keyup', onDocumentKeyUp)
}

function closePopup() {
    popupElement.classList.remove('popup__opened');
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

let formElement = document.querySelector('.popup__content');
let CurrentName = document.querySelector('.profile__name');
let CurrentProf = document.querySelector('.profile__subtitle');
console.log(CurrentName);
console.log(CurrentProf);
console.log(formElement);

function formSubmit(evt) {
    evt.preventDefault();

    let InputName = formElement.querySelector('.popup__form-name');
    let InputProf = formElement.querySelector('.popup__form-profession');

    CurrentName.textContent = InputName.value;
    CurrentProf.textContent = InputProf.value;
    console.log(CurrentName);
    console.log(CurrentProf);
}

formElement.addEventListener('submit', formSubmit);