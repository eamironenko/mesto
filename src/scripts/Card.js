export default class Card {
    constructor({data, cardSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick}) {
        this._link = data.link;
        this._title = data.name;
        this._id = data._id;
        this._likes = data.likes;
        this._owner = data.owner;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._cardSelector = cardSelector;
         
        this._handleCardClick = handleCardClick;
        //this._handleDeleteClick = handleDeleteClick;
        this._handleDeleteClick = handleDeleteClick.bind(this);
        this._handleLikeClick = handleLikeClick.bind(this);

        //this._handleDeleteClick = handleDeleteClick;
        //this._handleLikeClick = handleLikeClick;       
        //this._handleLikeClick = handleLikeClick.bind(this);
       
        //_______________________
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
        this._likeElement = this._element.querySelector('.element__like');        
        this._trashBox = this._element.querySelector('.element__trash');
        this._likeCounter = this._element.querySelector('.element__like-counter');

        this._element.querySelector('.element__title').textContent = this._title;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._link;        

        this._setEventListeners();
        this._handleDeleteBox();
        this._handleLikes();
        return this._element;
    }    

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _handleDeleteBox() {
        if (this._ownerId !== this._userId) {
            this._trashBox.classList.add('element__trash_hidden');
        } 
    }
    
    setLikeCount(data) {
        this._likes = data.likes;
        this.likeCountCard();
        this._handleLikes();
    }

    likeCountCard() {
        this._likeCounter.textContent = this._likes.length;
    }

    isLiked() {
        return Boolean(this._likes.find(item => item._id === this._userId)); 
    }

    _handleLikes() {
        if (this.isLiked()) {
            this._likeElement.classList.add('element__like_active');
        } else {
            this._likeElement.classList.remove('element__like_active');
        }
    };  

    _setEventListeners() {
        this._likeElement.addEventListener('click', () => { this._handleLikeClick(this) });
        this._trashBox.addEventListener('click', () => { this._handleDeleteClick(this) });
        this._elementImage.addEventListener('click', () => { this._handleCardClick(this._title, this._link) });
    }
}

