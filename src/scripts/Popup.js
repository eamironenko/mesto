export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._popupList = document.querySelectorAll('.popup');
        this._handleEscClose = this._handleEscClose.bind(this);       
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
        this._setEventListeners();
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.closePopup();
        };
    };   

    _setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            }
            if (evt.target.classList.contains('popup__close-button')) {
                this.closePopup();
            }
        })
    }
}