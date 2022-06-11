export default class Api {
    constructor(options) {
        this.url = options.url
        this.headers = options.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject('Ошибка');
        }
    }

    //получить данные пользователя(get)
    getUserInformation() {
        return fetch(this.url + '/users/me', {
            headers: this.headers,
        })
            .then(this._handleResponse)
    }
    //карточки в виде массива(get)
    getInitialCards() {
        return fetch(this.url + '/cards', {
            headers: this.headers,
        })
            .then(this._handleResponse)
    };

    //добавть карточку (post)
    addNewCard(newCard) {
        return fetch(this.url + '/cards/', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link,
            }),
        })
            .then(this._handleResponse)
    }
    //удалить карточку (delete)
    handleDeleteCard(idCard) {
        return fetch(this.url + '/cards/' + `${idCard}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(this._handleResponse)
    }

    //заменить данные пользователя(patch)
    editProfileForm(formData) {
        return fetch(this.url + '/users/me', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: formData.name,
                about: formData.profession,
            }),
        })
            .then(this._handleResponse)
    }

    //заменить аватар(patch)
    editUserAvatar(formData) {
        return fetch(this.url + '/users/me/avatar', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: formData.avatar,
            })
        })
            .then(this._handleResponse)
    }
    //поставить лайк
    handleLikeCard(idCard) {
        return fetch(this.url + '/cards/likes/' + `${idCard}`, {
            method: 'PUT',
            headers: this.headers,
        })
            .then(this._handleResponse)
    }
    //удалить лайк
    handleDislikeCard(idCard) {
        return fetch(this.url + '/cards/likes/' + `${idCard}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(this._handleResponse)
    };
}
