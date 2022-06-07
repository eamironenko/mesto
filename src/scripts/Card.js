export class Card {
    constructor({data, cardSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick}) {
        this._link = data.link;
        this._title = data.name;
        this._id = data._id;
        this._dataLikes = data.likes;
        this._owner = data.owner;        
        this._cardSelector = cardSelector;   
        this._userId = userId;        

        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
        
        //this._handleLikeClick = handleLikeClick.bind(this);
       // this._handleDeleteClick = handleDeleteClick.bind(this);
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
        this._like = this._element.querySelector('.element__like');        
        this._trashBox = this._element.querySelector('.element__trash');
        this._likeCounter = this._element.querySelector('.element__like-counter');

        this._element.querySelector('.element__title').textContent = this._title;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._link;
        this._likeCounter.textContent = this._dataLikes.length;

        this._setEventListeners();
        this._handleLikes();
        this._handleDeleteBox();
        //console.log(this._likeCounter)
        return this._element;
    }    

    _handleDeleteBox() {
        if(this._owner._id !== this._userId) {
            this._trashBox.class.add('element__trash_hidden');
        }
    }
    
    deleteCard() {
        this._element.remove();
    }

    _handleLikes() {        
        this._dataLikes.forEach((like) => {
            if (like._id === this._userId) {
                this._like.classList.add('element__like_active');
            };          
        });
    }

   /* _handleLikes() {        
       return this._dataLikes.some((like) => 
            like._id === this._userId);
    }*/

    addLike(countLikes) {
        this._like.classList.add('element__like_active');
        this._likeCounter.textContent = countLikes;
    }

    deleteLike(countLikes) {
        this._like.classList.remove('element__like_active');
        this._likeCounter.textContent = countLikes;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => { this._handleLikeClick(this._element) });
        //this._trashBox.addEventListener('click', () => { this._deleteCard() });
        this._trashBox.addEventListener('click', () => { this._handleDeleteCard(this._element) });
        this._elementImage.addEventListener('click', () => { this._handleCardClick(this._title, this._link) });
    }
}



//запись лайка из data
/*setLikeCountCard(data) {
    this._likes = data.likes;
    this.likeCountCard();
  }*/

 //*проверка лайка 
 /* isLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }*/