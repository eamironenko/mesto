import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popup, handleFormSubmit }) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__content');
        this._submitButton = this._popup.querySelector('.popup__save-button');
        this._submitButtonValue = this._submitButton.textContent;
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this._formData = {};
        this._inputList.forEach((input) => {
            this._formData[input.name] = input.value;
        });
        return this._formData;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

    closePopup() {
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