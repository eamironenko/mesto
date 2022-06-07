import Popup from "./Popup.js"

export default class PopupWithSubmit extends Popup {
constructor ({popupSelector, handleFormSubmit }) {
    constructor(popupSelector);
    this._handleFormSubmit  = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__content');
};

openPopup(element) {
    this._element = element;
    super.openPopup();
}

setEventListeners() {
    super._setEventListeners();
    this._formElement.addEventListener('submit', (evt) =>{
        evt.preventDefault();
        this._handleFormSubmit(this._element);
    })
}

closePopup() {
    this._formElement.reset;
    super.closePopup(); 
}
}