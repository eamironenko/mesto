import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, photoSelector, titleImageSelector) {
        super(popupSelector);
        this._photoPopup = document.querySelector(photoSelector);
        this._titleImagePopup = document.querySelector(titleImageSelector)
    }

    openImage(link, title) {
        this._photoPopup.src = link;
        this._photoPopup.alt = title;
        this._titleImagePopup.textContent = title;
        super.openPopup();
    }

    close() {
        super.closePopup();
    }
}
