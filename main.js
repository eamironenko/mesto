(()=>{"use strict";var e=document.querySelector(".popup_edit"),t=document.querySelector(".popup_add"),n=document.querySelector(".popup_image"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=e.querySelector(".popup__content_profile-form"),s=t.querySelector(".popup__content_card-form"),a=(document.querySelector(".profile__name"),document.querySelector(".profile__subtitle"),i.querySelector(".popup__input_type_name")),u=i.querySelector(".popup__input_type_profession"),c=(document.querySelector(".elements"),".elements"),l=document.querySelector(".profile__avatar");function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._title=t.name,this._id=t._id,this._dataLikes=t.likes,this._owner=t.owner,this._cardSelector=n,this._userId=r,this._handleCardClick=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__photo"),this._like=this._element.querySelector(".element__like"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._trashBox=this._element.querySelector(".element__trash"),this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._likeCounter.textContent=this._dataLikes.length,this._setEventListeners(),this._handleLikes(),this._element}},{key:"_handleLikes",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userId&&e._like.classList.add("element__like_active")}))}},{key:"_handleDeleteBox",value:function(){this._owner._id!==this._userId&&this._trashBox.class.add("element__trash_hidden")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"addLike",value:function(e){this._like.classList.add("element__like_active"),this._likeCounter.textContent=e}},{key:"deleteLike",value:function(e){this._like.classList.remove("element__like_active"),this._likeCounter.textContent=e}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeClick(e._element)})),this._trashBox.addEventListener("click",(function(){e._deleteCard()})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",activeInputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error",buttonEdit:".profile__edit-button",buttonAdd:".profile__add-button"},y=d((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_showError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._errorClass),n.textContent=t,n.classList.add(r._activeInputErrorClass)})),_(this,"_hideError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._errorClass),t.classList.remove(r._activeInputErrorClass),t.textContent=""})),_(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),_(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),_(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners(r._formElement),r._toggleButtonState(r._formElement)})),_(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),_(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),_(this,"disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),_(this,"resetForm",(function(){r._inputList.forEach((function(e){r._hideError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._activeInputErrorClass=t.activeInputErrorClass,this._errorClass=t.errorClass,this._buttonAdd=t.buttonAdd,this._buttonEdit=t.buttonEdit,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupList=document.querySelectorAll(".popup"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function s(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,n))._handleFormSubmit=r,t._formElement=t._popup.querySelector(".popup__content"),t}return t=s,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._formElement.querySelectorAll(".popup__input")),this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;S(O(s.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),S(O(s.prototype),"closePopup",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(g);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function R(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function s(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(r=i.call(this,e))._photoPopup=document.querySelector(t),r._titleImagePopup=document.querySelector(n),r}return t=s,(n=[{key:"openImage",value:function(e,t){this._photoPopup.src=e,this._photoPopup.alt=t,this._titleImagePopup.textContent=t,x(D(s.prototype),"openPopup",this).call(this)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(g);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.profileName,r=t.profileProfession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.profession}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(e){return e.ok?e.json():Promise.reject("Ошибка")},z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.urlUser=t.urlUser,this.urlCards=t.urlCards,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInformation",value:function(){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{headers:this.headers}).then(V)}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{headers:this.headers}).then(V)}},{key:"editProfileForm",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.profession})}).then(V)}},{key:"addNewCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(V)}},{key:"handleDeleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/idCard",{method:"DELETE",headers:this._headers}).then(V)}},{key:"handleLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/idCard/likes",{method:"PUT",headers:this.headers}).then(V)}},{key:"handleDislikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/idCard/likes",{method:"DELETE",headers:this._headers}).then(V)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({urlUser:"https://nomoreparties.co/v1/cohort-42/users/me",urlCards:"https://mesto.nomoreparties.co/v1/cohort-42/cards",headers:{authorization:"a424a2e2-b3e0-48b0-ade8-2a601f78bd48","Content-Type":"application/json"}}),H={};z.getUserInformation().then((function(e){console.log(e),G.setUserInfo({name:e.name,profession:e.about}),H=e._id,l.src=e.avatar})).catch((function(e){console.log(e)}));var J=new y(m,s);J.enableValidation();var M=new y(m,i);M.enableValidation();var G=new N({profileName:".profile__name",profileProfession:".profile__subtitle"}),K=new j({popupSelector:e,handleFormSubmit:function(e){console.log(e),z.editProfileForm(e).then((function(e){var t={name:e.name,profession:e.about};G.setUserInfo(t),K.close()})).catch((function(e){console.log(e)}))}});function Q(e){return new f(e,"#card-template",H,Z,$).generateCard()}K.setEventListeners(),r.addEventListener("click",(function(){var e=G.getUserInfo();a.value=e.name,u.value=e.profession,M.resetForm(),K.openPopup()}));var W=new b({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){W.addItem(Q(e),"end")}},c);z.getInitialCards().then((function(e){console.log(e);var t=new b({items:e,renderer:function(e){t.addItem(Q(e),"end")}},c);t.renderItems()})).catch((function(e){console.log(e)}));var X=new j({popupSelector:t,handleFormSubmit:function(e){console.log(e);var t={name:e.place,link:e.link};z.addNewCard(t).then((function(e){console.log(e),W.addItem(Q(e),"start")})).catch((function(e){console.log(e)})),J.disableButton(),J.resetForm(),X.close()}});W.renderItems(),X.setEventListeners();var Y=new F(n,".popup__photo",".popup__photo-title");function Z(e,t){Y.openImage(t,e)}function $(e){e.querySelector(".element__like_active")?z.handleDislikeCard(e._id).then((function(t){e.deleleLike(t.likes.length)})).catch((function(e){console.log(e)})):z.handleLikeCard(e._id).then((function(t){e.addLike(t.likes.length)})).catch((function(e){console.log(e)}))}Y.closePopup(),o.addEventListener("click",(function(){J.resetForm(),s.reset(),X.openPopup()}))})();