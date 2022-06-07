(()=>{"use strict";var e=document.querySelector(".popup_edit"),t=document.querySelector(".popup_add"),n=document.querySelector(".popup_image"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=e.querySelector(".popup__content_profile-form"),a=t.querySelector(".popup__content_card-form"),u=(document.querySelector(".profile__name"),document.querySelector(".profile__subtitle"),i.querySelector(".popup__input_type_name")),s=i.querySelector(".popup__input_type_profession"),c=(document.querySelector(".elements"),".elements"),l=document.querySelector(".profile__avatar"),p=document.querySelector(".popup_delete");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){var n=t.data,r=t.cardSelector,o=t.userId,i=(t.handleCardClick,t.handleDeleteClick);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=n.link,this._title=n.name,this._id=n._id,this._dataLikes=n.likes,this._owner=n.owner,this._cardSelector=r,this._userId=o,this._handleLikeClick=handleLikeClick,this._handleDeleteClick=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__photo"),this._like=this._element.querySelector(".element__like"),this._trashBox=this._element.querySelector(".element__trash"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._setEventListeners(),this._handleDeleteBox(),this._handleLikes(),this._element}},{key:"_handleDeleteBox",value:function(){this._owner._id!==this._userId&&this._trashBox.class.add(".element__trash_hidden")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_handleLikes",value:function(){var e=this;this._dataLikes.forEach((function(t){t._id===e._userId&&e._like.classList.add("element__like_active")}))}},{key:"addLike",value:function(e){this._like.classList.add("element__like_active"),this._likeCounter.textContent=e}},{key:"deleteLike",value:function(e){this._like.classList.remove("element__like_active"),this._likeCounter.textContent=e}},{key:"_setEventListeners",value:function(){var e=this;this._trashBox.addEventListener("click",(function(){e._handleDeleteCard(e._element)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",activeInputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error",buttonEdit:".profile__edit-button",buttonAdd:".profile__add-button"},v=_((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_showError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._errorClass),n.textContent=t,n.classList.add(r._activeInputErrorClass)})),m(this,"_hideError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._errorClass),t.classList.remove(r._activeInputErrorClass),t.textContent=""})),m(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),m(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),m(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners(r._formElement),r._toggleButtonState(r._formElement)})),m(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),m(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),m(this,"disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),m(this,"resetForm",(function(){r._inputList.forEach((function(e){r._hideError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._activeInputErrorClass=t.activeInputErrorClass,this._errorClass=t.errorClass,this._buttonAdd=t.buttonAdd,this._buttonEdit=t.buttonEdit,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupList=document.querySelectorAll(".popup"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._formElement=t._popup.querySelector(".popup__content"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._formElement.querySelectorAll(".popup__input")),this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;C(L(a.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),C(L(a.prototype),"closePopup",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function T(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._photoPopup=document.querySelector(t),r._titleImagePopup=document.querySelector(n),r}return t=a,(n=[{key:"openImage",value:function(e,t){this._photoPopup.src=e,this._photoPopup.alt=t,this._titleImagePopup.textContent=t,B(F(a.prototype),"openPopup",this).call(this)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function J(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var G=function(e){var t,n;function r(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),constructor(n),t._handleFormSubmit=o,t._formElement=t._popup.querySelector(".popup__content"),J(t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(r,e),r,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),t=r,(n=[{key:"openPopup",value:function(e){this._element=e,V(M(r.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;V(M(r.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._element)}))}},{key:"closePopup",value:function(){this._formElement.reset,V(M(r.prototype),"closePopup",this).call(this)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),r}(E);function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(t){var n=t.profileName,r=t.profileProfession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.profession}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(e){return e.ok?e.json():Promise.reject("Ошибка")},Y=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.urlUser=t.urlUser,this.urlCards=t.urlCards,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getInintialData",value:function(){return Promise.all([this.getUserInformation(),this.geyInitialCards()])}},{key:"getUserInformation",value:function(){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{headers:this.headers}).then(X)}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{headers:this.headers}).then(X)}},{key:"editProfileForm",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.profession})}).then(X)}},{key:"addNewCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(X)}},{key:"handleDeleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/idCard",{method:"DELETE",headers:this._headers}).then(X)}},{key:"handleLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/idCard",{method:"PUT",headers:this.headers}).then(X)}},{key:"handleDislikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/idCard",{method:"DELETE",headers:this._headers}).then(X)}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({urlUser:"https://nomoreparties.co/v1/cohort-42/users/me",urlCards:"https://mesto.nomoreparties.co/v1/cohort-42/cards",headers:{authorization:"a424a2e2-b3e0-48b0-ade8-2a601f78bd48","Content-Type":"application/json"}}),Z={};Y.getUserInformation().then((function(e){console.log(e),te.setUserInfo({name:e.name,profession:e.about}),Z=e._id,l.src=e.avatar})).catch((function(e){console.log(e)}));var $=new v(y,a);$.enableValidation();var ee=new v(y,i);ee.enableValidation();var te=new Q({profileName:".profile__name",profileProfession:".profile__subtitle"}),ne=new I({popupSelector:e,handleFormSubmit:function(e){console.log(e),Y.editProfileForm(e).then((function(e){var t={name:e.name,profession:e.about};te.setUserInfo(t),ne.close()})).catch((function(e){console.log(e)}))}});function re(e){return new h({data:e,cardSelector:"#card-template",userId:Z,handleCardClick:function(e,t){ae.openImage(t,e)},handleDeleteClick:function(e){G.openPopup(e)}}).generateCard()}ne.setEventListeners(),r.addEventListener("click",(function(){var e=te.getUserInfo();u.value=e.name,s.value=e.profession,ee.resetForm(),ne.openPopup()}));var oe=new k({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){oe.addItem(re(e),"end")}},c);Y.getInitialCards().then((function(e){console.log(e);var t=new k({items:e,renderer:function(e){t.addItem(re(e),"end")}},c);t.renderItems()})).catch((function(e){console.log(e)}));var ie=new I({popupSelector:t,handleFormSubmit:function(e){console.log(e);var t={name:e.place,link:e.link};Y.addNewCard(t).then((function(e){console.log(e),oe.addItem(re(e),"start")})).catch((function(e){console.log(e)})),$.disableButton(),$.resetForm(),ie.close()}});oe.renderItems(),ie.setEventListeners(),o.addEventListener("click",(function(){$.resetForm(),a.reset(),ie.openPopup()}));var ae=new U(n,".popup__photo",".popup__photo-title");ae.closePopup();var ue=new G({PopupSelector:p,handleFormSubmit:function(e){Y.handleDeleteCard(e._id).then((function(){e.deleteCard()})).then((function(){ue.closePopup()})).catch((function(e){console.log(e)}))}});ue.setEventListeners()})();