(()=>{"use strict";var e=document.querySelector(".popup_edit"),t=document.querySelector(".popup_add"),n=document.querySelector(".popup_image"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=e.querySelector(".popup__content_profile-form"),u=t.querySelector(".popup__content_card-form"),s=(document.querySelector(".profile__name"),document.querySelector(".profile__subtitle"),i.querySelector(".popup__input_type_name")),a=i.querySelector(".popup__input_type_profession");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".elements");var c=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._title=t.name,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__photo"),this._like=this._element.querySelector(".element__like"),this._trashBox=this._element.querySelector(".element__trash"),this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._setEventListeners(),this._element}},{key:"_toggleLike",value:function(){this._like.classList.toggle("element__like_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._toggleLike()})),this._trashBox.addEventListener("click",(function(){e._deleteCard()})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",activeInputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error",buttonEdit:".profile__edit-button",buttonAdd:".profile__add-button"},h=f((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_showError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._errorClass),n.textContent=t,n.classList.add(r._activeInputErrorClass)})),_(this,"_hideError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._errorClass),t.classList.remove(r._activeInputErrorClass),t.textContent=""})),_(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),_(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),_(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners(r._formElement),r._toggleButtonState(r._formElement)})),_(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),_(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),_(this,"disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),_(this,"resetForm",(function(){r._inputList.forEach((function(e){r._hideError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._activeInputErrorClass=t.activeInputErrorClass,this._errorClass=t.errorClass,this._buttonAdd=t.buttonAdd,this._buttonEdit=t.buttonEdit,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupList=document.querySelectorAll(".popup"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._formElement=t._popup.querySelector(".popup__content"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._formElement.querySelectorAll(".popup__input")),this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;S(C(u.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),S(C(u.prototype),"closePopup",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function x(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._photoPopup=document.querySelector(t),r._titleImagePopup=document.querySelector(n),r}return t=u,(n=[{key:"openImage",value:function(e,t){this._photoPopup.src=e,this._photoPopup.alt=t,this._titleImagePopup.textContent=t,I(R(u.prototype),"openPopup",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=new(function(){function e(t){var n=t.profileName,r=t.profileProfession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.profession}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({profileName:".profile__name",profileProfession:".profile__subtitle"});r.addEventListener("click",(function(){var e=F.getUserInfo();s.value=e.name,a.value=e.profession,H.resetForm(),A.openPopup()}));var A=new O({popupSelector:e,handleFormSubmit:function(e){var t={name:e.name,profession:e.profession};F.setUserInfo(t),A.close()}});function V(e){return new c(e,"#card-template",M).generateCard()}A.setEventListeners();var N=new m({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){N.addItem(V(e),"end")}},".elements"),U=new T(n,".popup__photo",".popup__photo-title");function M(e,t){U.openImage(t,e)}U.closePopup(),o.addEventListener("click",(function(){G.resetForm(),u.reset(),z.openPopup()}));var z=new O({popupSelector:t,handleFormSubmit:function(e){var t={name:e.place,link:e.link};N.addItem(V(t),"start"),G.disableButton(),G.resetForm(),z.close()}});N.renderItems(),z.setEventListeners();var H=new h(d,i);H.enableValidation();var G=new h(d,u);G.enableValidation()})();