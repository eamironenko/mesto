import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, photoSelector, titleImageSelector) {
        super(popupSelector);
        this._photoPopup = this._popup.querySelector(photoSelector);
        this._titleImagePopup = this._popup.querySelector(titleImageSelector)
    }

    openPopup(link, title) {
        this._photoPopup.src = link;
        this._photoPopup.alt = title;
        this._titleImagePopup.textContent = title;
        super.openPopup();
    }
}
