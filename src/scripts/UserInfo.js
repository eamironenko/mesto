import { currentName, currentProf } from './constants.js'

export default class UserInfo {
    constructor(data) {
        this._userName = data.name;
        this._userProfession = data.profession;
    }

    getUserInfo() {
        const userInfo = {
            name: currentName.textContent,
            profession: currentProf.textContent
        }
        return userInfo;
    }

    setUserInfo() {
        currentName.textContent = this._userName;
        currentProf.textContent = this._userProfession;
    }
}