const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject('Ошибка');
    }
}

export default class Api {
    constructor(options) {
        this.headers = options.headers;
    }


    //получить данные пользователя(get)
    getUserInformation() {
        return fetch('https://nomoreparties.co/v1/cohort-42/users/me', {
            headers: this.headers,
        })
            .then(handleResponse)
    }
    //карточки в виде массива(get)
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
            headers: this.headers,
        })
            .then(handleResponse)
    };

    //добавть карточку (post)
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
    //удалить карточку (delete)
    handleDeleteCard(idCard) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-42/cards/${idCard}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(handleResponse)
    }

    //заменить данные пользователя(patch)
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

    //заменить аватар(patch)
    editUserAvatar(formData) {
        return fetch('https://nomoreparties.co/v1/cohort-42/users/me/avatar', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: formData.avatar,
              })
        })
            .then(handleResponse)
    }

    handleLikeCard(idCard) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/${idCard}`, {
            method: 'PUT',
            headers: this.headers,
        })
            .then(handleResponse)
    }

    handleDislikeCard(idCard) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/${idCard}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(handleResponse)
    };
}
