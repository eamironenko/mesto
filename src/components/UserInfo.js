export default class UserInfo {
    constructor({ profileNameSelector, profileProfessionSelector, avatarSelector }) {
        this._userName = document.querySelector(profileNameSelector);
        this._userProfession = document.querySelector(profileProfessionSelector);
        this._userAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            profession: this._userProfession.textContent,
            avatar: this._userAvatar.src,
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userProfession.textContent = data.profession;
        this._userAvatar.src = data.avatar;
        console.log(this._userAvatar.src)
    }
}