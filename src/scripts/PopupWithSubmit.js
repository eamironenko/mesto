import Popup from "./Popup.js"

export default class PopupWithSubmit extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__content');
    };

    openPopup(data) {
        this._data = data;
        super.openPopup();
    }

    setEventListeners() {
        super._setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._data );
        })
    }

    closePopup() {        
        super.closePopup();
        this._formElement.reset;
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Удаление...'
        } else {
            this._submitButton.textContent = this._submitButtonValue;
        }
    }
}