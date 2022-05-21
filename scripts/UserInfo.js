import {currentName, currentProf} from './cardsSet.js'

//input name это заполняется в инпуте
//carrent в шапке

export default class UserInfo {
    //управление отображением информации о пользователе на странице
    constructor(userName, userProfession) {
        this._userName = userName;
        this._userProfession = userProfession;
    }
//возвращает объект с данными пользователя
    getUserInfo() {         //здесь должен быть input
        const userInfo = {
            name: currentName.textContent,
            profession: currentProf.textContent
        }
        return userInfo;
    }

    //принимает новые данные пользователя и добавляет на страницу
    setUserInfo() {      
        currentName.textContent = this._userName;
        currentProf.textContent = this._userProfession;
        console.log(currentName.textContent);
    }
 }
