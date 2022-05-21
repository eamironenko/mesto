import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, link, title) {
        super(popupSelector);
        this._link = link;
        this._title = title
    }

    openImage() {
        this._photoPopup = document.querySelector('.popup__photo');
        this._titleImagePopup = document.querySelector('.popup__photo-title');
        this._photoPopup.src = this._link;
        this._photoPopup.alt = this._title;
        this._titleImagePopup.textContent = this._title;
        super.openPopup();
    }
}



