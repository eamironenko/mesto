import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup, photoSelector, titleImageSelector) {
        super(popup);
        this._photoPopup = this._popup.querySelector(photoSelector);
        this._titleImagePopup = this._popup.querySelector(titleImageSelector)
    }

    openImage(link, title) {
        this._photoPopup.src = link;
        this._photoPopup.alt = title;
        this._titleImagePopup.textContent = title;
        super.openPopup();
    }
}
