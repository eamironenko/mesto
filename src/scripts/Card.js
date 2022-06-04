export class Card {
    constructor(data, cardSelector, handleCardClick, handleLikeClick) {
        this._link = data.link;
        this._title = data.name;
        this._cardSelector = cardSelector;        
        this.likes = data.likes;
        this._userId = data._id

        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        //_______________________
        /*this._id = data._id;
        this._likes = data.likes;
        this._owner = data.owner;
        this._userId = userId;*/
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
        this._likeCounter = this._element.querySelector('.element__like-counter');
        this._trashBox = this._element.querySelector('.element__trash');

        this._element.querySelector('.element__title').textContent = this._title;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._link;
        this._likeCounter.textContent = this.likes.length;

        this._setEventListeners();
        this._handleLikes();
        return this._element;
    }

    _handleLikes() {        
        this._likes.forEach((like) => {
            if (like._id === this._userId) {
                this._like.classList.add('element__like_active');
            }            
        });
    }

    _deleteCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => { this._handleLikeClick(this._element, this._userId) });
        this._trashBox.addEventListener('click', () => { this._deleteCard() });
        this._elementImage.addEventListener('click', () => { this._handleCardClick(this._title, this._link) });
    }
}