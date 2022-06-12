export default class UserInfo {
    constructor({ nameSelector, professionSelector, avatarSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userProfession = document.querySelector(professionSelector);
        this._userAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            profession: this._userProfession.textContent,
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userProfession.textContent = data.profession;
        //this._userAvatar.src = data.avatar;
    }

    setUserAvatar(data) {
        this._userAvatar.src = data.avatar;
    }
}