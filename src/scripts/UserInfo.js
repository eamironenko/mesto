export default class UserInfo {
    constructor({profileName, profileProfession, avatarSelector} ) {
        this._userName = document.querySelector(profileName);
        this._userProfession = document.querySelector(profileProfession);
        this._avatarSelector = document.querySelector(avatarSelector)
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            profession: this._userProfession.textContent,
            avatar: this._avatarSelector.src,
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userProfession.textContent = data.profession;
        this._avatarSelector.src = data.avatar
    }

 // setUserAvatar(data) {}

    /*setUserInfoData(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
  } */
}