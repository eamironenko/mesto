(()=>{"use strict";var e=document.querySelector(".popup_edit"),t=document.querySelector(".popup_add"),n=document.querySelector(".popup_image"),o=document.querySelector(".popup_delete"),r=document.querySelector(".popup_avatar"),i=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__avatar"),c=e.querySelector(".popup__content_profile-form"),l=t.querySelector(".popup__content_card-form"),s=r.querySelector(".popup__content_avatar-form"),p=(document.querySelector(".profile__name"),document.querySelector(".profile__subtitle"),c.querySelector(".popup__input_type_name")),f=c.querySelector(".popup__input_type_profession");function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}document.querySelector(".elements");var d=function(){function e(t){var n=t.data,o=t.cardSelector,r=t.userId,i=t.handleCardClick,u=t.handleDeleteClick,a=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=n.link,this._title=n.name,this._id=n._id,this._likes=n.likes,this._owner=n.owner,this._ownerId=n.owner._id,this._userId=r,this._cardSelector=o,this._handleCardClick=i,this._handleDeleteClick=u.bind(this),this._handleLikeClick=a.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__photo"),this._likeElement=this._element.querySelector(".element__like"),this._trashBox=this._element.querySelector(".element__trash"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._setEventListeners(),this._handleDeleteBox(),this._handleLikes(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleDeleteBox",value:function(){this._ownerId!==this._userId&&this._trashBox.classList.add("element__trash_hidden")}},{key:"setLikeCount",value:function(e){this._likes=e.likes,this.likeCountCard(),this._handleLikes()}},{key:"likeCountCard",value:function(){this._likeCounter.textContent=this._likes.length}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"_handleLikes",value:function(){this.isLiked()?this._likeElement.classList.add("element__like_active"):this._likeElement.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeElement.addEventListener("click",(function(){e._handleLikeClick(e)})),this._trashBox.addEventListener("click",(function(){e._handleDeleteClick(e)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",activeInputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error",buttonEdit:".profile__edit-button",buttonAdd:".profile__add-button"},b=y((function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_showError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._errorClass),n.textContent=t,n.classList.add(o._activeInputErrorClass)})),m(this,"_hideError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._errorClass),t.classList.remove(o._activeInputErrorClass),t.textContent=""})),m(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),m(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))}))})),m(this,"enableValidation",(function(){o._formElement.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners(o._formElement),o._toggleButtonState(o._formElement)})),m(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),m(this,"_toggleButtonState",(function(){o._hasInvalidInput()?o.disableButton():(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1)})),m(this,"disableButton",(function(){o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0})),m(this,"resetForm",(function(){o._inputList.forEach((function(e){o._hideError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._activeInputErrorClass=t.activeInputErrorClass,this._errorClass=t.errorClass,this._buttonAdd=t.buttonAdd,this._buttonEdit=t.buttonEdit,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupList=document.querySelectorAll(".popup"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=L(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},P.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(o);if(r){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=o,t._formElement=t._popup.querySelector(".popup__content"),t._submitButton=t._popup.querySelector(".popup__save-button"),t._submitButtonValue=t._submitButton.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._formElement.querySelectorAll(".popup__input")),this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;P(I(u.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),P(I(u.prototype),"closePopup",this).call(this)}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonValue}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=x(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},T.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function F(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(r){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function u(e,t,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e))._photoPopup=document.querySelector(t),o._titleImagePopup=document.querySelector(n),o}return t=u,(n=[{key:"openImage",value:function(e,t){this._photoPopup.src=e,this._photoPopup.alt=t,this._titleImagePopup.textContent=t,T(A(u.prototype),"openPopup",this).call(this)}},{key:"close",value:function(){T(A(u.prototype),"closePopup",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=J(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},H.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function z(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(o);if(r){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=o,t._formElement=t._popup.querySelector(".popup__content"),t._submitButton=t._popup.querySelector(".popup__save-button"),t._submitButtonValue=t._submitButton.textContent,t}return t=u,(n=[{key:"openPopup",value:function(e){this._data=e,H(G(u.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;H(G(u.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._data)}))}},{key:"closePopup",value:function(){H(G(u.prototype),"closePopup",this).call(this),this._formElement.reset}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Удаление...":this._submitButtonValue}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var W=function(){function e(t){var n=t.profileName,o=t.profileProfession,r=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(o),this._avatarSelector=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent,avatar:this._avatarSelector.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.profession,this._avatarSelector.src=e.avatar}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function X(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Y=function(e){return e.ok?e.json():Promise.reject("Ошибка")},Z=null,$=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInformation",value:function(){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{headers:this.headers}).then(Y)}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{headers:this.headers}).then(Y)}},{key:"addNewCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(Y)}},{key:"handleDeleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/".concat(e),{method:"DELETE",headers:this.headers}).then(Y)}},{key:"editProfileForm",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.profession})}).then(Y)}},{key:"editUserAvatar",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-42/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(Y)}},{key:"handleLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/".concat(e),{method:"PUT",headers:this.headers}).then(Y)}},{key:"handleDislikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/".concat(e),{method:"DELETE",headers:this.headers}).then(Y)}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({headers:{authorization:"a424a2e2-b3e0-48b0-ade8-2a601f78bd48","Content-Type":"application/json"}}),ee=new W({profileName:".profile__name",profileProfession:".profile__subtitle",avatarSelector:".profile__avatar"});$.getUserInformation().then((function(e){console.log(e),ee.setUserInfo({name:e.name,profession:e.about,avatar:e.avatar}),Z=e._id})).catch((function(e){console.log(e)}));var te=new g({renderer:function(e){te.addItem(ae(e),"end")}},".elements");$.getInitialCards().then((function(e){te.renderItems(e)})).catch((function(e){console.log(e)}));var ne=new q({popupSelector:t,handleFormSubmit:function(e){console.log(e),ne.renderLoading(!0);var t={name:e.place,link:e.link};$.addNewCard(t).then((function(e){console.log(e),te.addItem(ae(e),"start")})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1)})),ce.disableButton(),ce.resetForm(),ne.close()}});ne.setEventListeners(),u.addEventListener("click",(function(){ce.resetForm(),l.reset(),ne.openPopup()}));var oe=new V(n,".popup__photo",".popup__photo-title");oe.close();var re=new q({popupSelector:r,handleFormSubmit:function(e){re.renderLoading(!0),$.editUserAvatar(e).then((function(e){ee.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!0),re.close()}))}});re.setEventListeners(),a.addEventListener("click",(function(){se.resetForm(),s.reset(),re.openPopup()}));var ie=new q({popupSelector:e,handleFormSubmit:function(e){ie.renderLoading(!0),$.editProfileForm(e).then((function(e){ee.setUserInfo({name:e.name,profession:e.about})})).catch((function(e){console.log(e)})).finally((function(){ie.renderLoading(!1),ie.close()}))}});ie.setEventListeners(),i.addEventListener("click",(function(){var e=ee.getUserInfo();p.value=e.name,f.value=e.profession,le.resetForm(),ie.openPopup()}));var ue=new K({popupSelector:o,handleFormSubmit:function(e){ue.renderLoading(!0),$.handleDeleteCard(e._id).then((function(){e.deleteCard()})).then((function(){ue.closePopup()})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1)}))}});function ae(e){var t=new d({data:e,cardSelector:"#card-template",userId:Z,handleCardClick:function(e,t){oe.openImage(t,e)},handleDeleteClick:function(e){ue.openPopup(e)},handleLikeClick:function(e){t.isLiked()?$.handleDislikeCard(e._id).then((function(e){t.setLikeCount(e)})).catch((function(e){console.log(e)})):$.handleLikeCard(e._id).then((function(e){t.setLikeCount(e)})).catch((function(e){console.log(e)}))}});return t.generateCard()}ue.setEventListeners();var ce=new b(v,l);ce.enableValidation();var le=new b(v,c);le.enableValidation();var se=new b(v,s);se.enableValidation()})();