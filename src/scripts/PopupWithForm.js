import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__content');
        this._submitButton = this._popup.querySelector('.popup__save-button');
        this._submitButtonValue = this._submitButton.textContent;
    }

    _getInputValues() {
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
        this._formData = {};
        this._inputList.forEach((input) => {
            this._formData[input.name] = input.value;
        });
        return this._formData;
    }

    setEventListeners() {
        super._setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

    close() {
        this._formElement.reset();
        super.closePopup();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonValue;
        }
    }

}