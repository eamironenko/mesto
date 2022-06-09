(()=>{"use strict";var e=document.querySelector(".popup_edit"),t=document.querySelector(".popup_add"),n=document.querySelector(".popup_image"),o=document.querySelector(".popup_delete"),r=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),a=e.querySelector(".popup__content_profile-form"),u=t.querySelector(".popup__content_card-form"),c=(document.querySelector(".profile__name"),document.querySelector(".profile__subtitle"),a.querySelector(".popup__input_type_name")),l=a.querySelector(".popup__input_type_profession");function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}document.querySelector(".elements");var p=function(){function e(t){var n=t.data,o=t.cardSelector,r=t.userId,i=t.handleCardClick,a=t.handleDeleteClick,u=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=n.link,this._title=n.name,this._id=n._id,this._likes=n.likes,this._owner=n.owner,this._ownerId=n.owner._id,this._userId=r,this._cardSelector=o,this._handleCardClick=i,this._handleDeleteClick=a.bind(this),this._handleLikeClick=u.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__photo"),this._likeElement=this._element.querySelector(".element__like"),this._trashBox=this._element.querySelector(".element__trash"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._setEventListeners(),this._handleDeleteBox(),this._handleLikes(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleDeleteBox",value:function(){this._ownerId===this._userId&&this._trashBox.classList.add("element__trash_hidden")}},{key:"setLikeCount",value:function(e){this._likes=e.likes,this.likeCountCard(),this._handleLikes()}},{key:"likeCountCard",value:function(){this._likeCounter.textContent=this._likes.length}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"_handleLikes",value:function(){this.isLiked()?this._likeElement.classList.add("element__like_active"):this._likeElement.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeElement.addEventListener("click",(function(){e._handleLikeClick(e)})),this._trashBox.addEventListener("click",(function(){e._handleDeleteClick(e)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",activeInputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error",buttonEdit:".profile__edit-button",buttonAdd:".profile__add-button"},y=h((function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_showError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._errorClass),n.textContent=t,n.classList.add(o._activeInputErrorClass)})),d(this,"_hideError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._errorClass),t.classList.remove(o._activeInputErrorClass),t.textContent=""})),d(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),d(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))}))})),d(this,"enableValidation",(function(){o._formElement.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners(o._formElement),o._toggleButtonState(o._formElement)})),d(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),d(this,"_toggleButtonState",(function(){o._hasInvalidInput()?o.disableButton():(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1)})),d(this,"disableButton",(function(){o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0})),d(this,"resetForm",(function(){o._inputList.forEach((function(e){o._hideError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._activeInputErrorClass=t.activeInputErrorClass,this._errorClass=t.errorClass,this._buttonAdd=t.buttonAdd,this._buttonEdit=t.buttonEdit,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupList=document.querySelectorAll(".popup"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=w(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=o,t._formElement=t._popup.querySelector(".popup__content"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._formElement.querySelectorAll(".popup__input")),this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;S(O(a.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),S(O(a.prototype),"closePopup",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=B(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},q.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(o);if(r){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,e))._photoPopup=document.querySelector(t),o._titleImagePopup=document.querySelector(n),o}return t=a,(n=[{key:"openImage",value:function(e,t){this._photoPopup.src=e,this._photoPopup.alt=t,this._titleImagePopup.textContent=t,q(D(a.prototype),"openPopup",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=U(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},A.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function J(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(o);if(r){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function a(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=o,t._formElement=t._popup.querySelector(".popup__content"),t}return t=a,(n=[{key:"openPopup",value:function(e){this._card=e,A(H(a.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;A(H(a.prototype),"_setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._card)}))}},{key:"closePopup",value:function(){A(H(a.prototype),"closePopup",this).call(this),this._formElement.reset}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var $=function(){function e(t){var n=t.profileName,o=t.profileProfession,r=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(o),this._avatarSelector=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent,avatar:this._avatarSelector.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.profession,this._avatarSelector.src=e.avatar}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var K=function(e){return e.ok?e.json():Promise.reject("Ошибка")},Q=null,W=null,X=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInformation",value:function(){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{headers:this.headers}).then(K)}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{headers:this.headers}).then(K)}},{key:"addNewCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(K)}},{key:"handleDeleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/${idCard}",{method:"DELETE",headers:{authorization:"a424a2e2-b3e0-48b0-ade8-2a601f78bd48"},body:JSON.stringify({_id:e})}).then(K)}},{key:"editProfileForm",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-42/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.profession})}).then(K)}},{key:"editUserAvatar",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-42/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(K)}},{key:"handleLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/idCard",{method:"PUT",headers:this.headers}).then(K)}},{key:"handleDislikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards/likes/idCard",{method:"DELETE",headers:this._headers}).then(K)}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({headers:{authorization:"a424a2e2-b3e0-48b0-ade8-2a601f78bd48","Content-Type":"application/json"}}),Y=new $({profileName:".profile__name",profileProfession:".profile__subtitle",avatarSelector:".profile__avatar"});X.getUserInformation().then((function(e){console.log(e),Y.setUserInfo({name:e.name,profession:e.about,avatar:e.avatar}),W=e._id})).catch((function(e){console.log(e)}));var Z=new v({renderer:function(e){Z.addItem(re(e),"end")}},".elements");X.getInitialCards().then((function(e){console.log(e),Z.renderItems(e)})).catch((function(e){console.log(e)}));var ee=new L({popupSelector:t,handleFormSubmit:function(e){console.log(e);var t={name:e.place,link:e.link};X.addNewCard(t).then((function(e){console.log(e),Z.addItem(re(e),"start")})).catch((function(e){console.log(e)})),ie.disableButton(),ie.resetForm(),ee.close()}});ee.setEventListeners(),i.addEventListener("click",(function(){ie.resetForm(),u.reset(),ee.openPopup()}));var te=new x(n,".popup__photo",".popup__photo-title");te.closePopup();var ne=new L({popupSelector:e,handleFormSubmit:function(e){X.editProfileForm(e).then((function(e){Y.setUserInfo({name:e.name,profession:e.about}),ne.close()})).catch((function(e){console.log(e)}))}});ne.setEventListeners(),r.addEventListener("click",(function(){var e=Y.getUserInfo();c.value=e.name,l.value=e.profession,ae.resetForm(),ne.openPopup()}));var oe=new z({popupSelector:o,handleFormSubmit:function(e){X.handleDeleteCard(e._id),console.log(e._id).then((function(){Q.deleteCard()})).then((function(){oe.closePopup()})).catch((function(e){console.log(e)}))}});function re(e){var t=new p({data:e,cardSelector:"#card-template",userId:W,handleCardClick:function(e,t){te.openImage(t,e)},handleDeleteClick:function(e){Q=t,console.log(e),oe.openPopup(e)},handleLikeClick:function(e){e.isLiked()?X.handleLikeCard(e).then((function(e){e.setLikeCount(e)})).catch((function(e){console.log(e)})):X.handleDislikeCard(e).then((function(e){e.setLikeCount(e)})).catch((function(e){console.log(e)}))}});return t.generateCard()}oe.setEventListeners();var ie=new y(_,u);ie.enableValidation();var ae=new y(_,a);ae.enableValidation()})();