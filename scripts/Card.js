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

    generateCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__photo');
        this._like = this._element.querySelector('.element__like');
        this._trashBox = this._element.querySelector('.element__trash');
        this._element.querySelector('.element__title').textContent = this._title;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._link;

        this._setEventListeners();
        return this._element;
    }

    _toggleLike() {
        this._like.classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => { this._toggleLike() });
        this._trashBox.addEventListener('click', () => { this._deleteCard() });
        this._elementImage.addEventListener('click', () => { this._handleOpenImage(this._title, this._link) });
    }
}