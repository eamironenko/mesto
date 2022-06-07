const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
    return Promise.reject('Ошибка');
}}

export default class Api {
    constructor(parameter) {        
        this.urlUser = parameter.urlUser;
        this.urlCards = parameter.urlCards;
        this.headers = parameter.headers;        
    }

    getInintialData() {
        return Promise.all ([this.getUserInformation(), this.geyInitialCards()])
    }

    getUserInformation() {
        return fetch('https://nomoreparties.co/v1/cohort-42/users/me', {
            headers: this.headers,
        })
            .then(handleResponse)
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
            headers: this.headers,
        })
            .then(handleResponse)
    };

    editProfileForm(formData) {
        return fetch('https://nomoreparties.co/v1/cohort-42/users/me', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: formData.name,
                about: formData.profession,
            }),
        })
            .then(handleResponse)
    }

    addNewCard(newCard) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
            method: 'POST',    
            headers: this.headers,
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link,
            }),
        })
            .then(handleResponse)
    }

    handleDeleteCard(idCard) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards/idCard', {
            method: 'DELETE',
            headers: this._headers
          })
          .then(handleResponse) 
      }

    handleLikeCard(idCard) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/idCard', {
            method: 'PUT',
            headers: this.headers,
        })
            .then(handleResponse)
    }

    handleDislikeCard(idCard) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/idCard', {
          method: 'DELETE',
          headers: this._headers
        })
        .then(handleResponse)
      };

      

}
