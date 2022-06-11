import Popup from "./Popup.js"

export default class PopupWithSubmit extends Popup {
    constructor({ popup, handleFormSubmit }) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__content');
        this._submitButton = this._popup.querySelector('.popup__save-button');
        this._submitButtonValue = this._submitButton.textContent;
    };

    openPopup(data) {
        this._data = data;
        super.openPopup();
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._data);
        })
    }

    closePopup() {
        super.closePopup();
        this._formElement.reset;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Удаление...'
        } else {
            this._submitButton.textContent = this._submitButtonValue;
        }
    }
}