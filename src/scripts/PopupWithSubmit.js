import Popup from "./Popup.js"

export default class PopupWithSubmit extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__content');
    };

    openPopup(card) {
        this._card = card;
        super.openPopup();
    }

    setEventListeners() {
        super._setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._card );
        })
    }

    closePopup() {        
        super.closePopup();
        this._formElement.reset;
    }
}