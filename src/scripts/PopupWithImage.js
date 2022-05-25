import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        //this._link = link;
        //this._title = title
        this._photoPopup = document.querySelector('.popup__photo');
        this._titleImagePopup = document.querySelector('.popup__photo-title')
    }

    openImage(link, title) {
        this._photoPopup.src = link;
        this._photoPopup.alt = title;
        this._titleImagePopup.textContent = title;
        super.openPopup();
    }
}
