export class Card {
    constructor(data, cardSelector, handleOpenImage) {
        this._link = data.link;
        this._title = data.name;
        this._cardSelector = cardSelector;
        this._handleOpenImage = handleOpenImage;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._title;
        this._elementImage = this._element.querySelector('.element__photo');
        this._elementImage.alt = this._title;
        this._elementImage.src = this._link;
        return this._element;
    }

    _toggleLike() {
        this._element.querySelector('.element__like').classList.add('element__like_active');
    }

    _deleteCard() {
        this._element.querySelector('.element__trash').closest('.element').remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => { this._toggleLike() });
        this._element.querySelector('.element__trash').addEventListener('click', () => { this._deleteCard() });
        this._element.querySelector('.element__photo').addEventListener('click', () => { this._handleOpenImage(this._title, this._link) });
    }
}