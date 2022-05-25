export default class UserInfo {
    constructor({profileName, profileProfession} ) {
        this._userName = document.querySelector(profileName);
        this._userProfession = document.querySelector(profileProfession);
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            profession: this._userProfession.textContent
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userProfession.textContent = data.profession;
    }
}