(()=>{"use strict";var e={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",activeInputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error"},t=document.querySelector(".popup_edit"),n=document.querySelector(".popup_add"),r=document.querySelector(".popup_image"),o=document.querySelector(".popup_delete"),i=document.querySelector(".popup_avatar"),u=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),s=document.querySelector(".profile__avatar-button"),l=t.querySelector(".popup__content_profile-form"),c=n.querySelector(".popup__content_card-form"),p=i.querySelector(".popup__content_avatar-form"),f=(document.querySelector(".profile__name"),document.querySelector(".profile__subtitle"),l.querySelector(".popup__input_type_name")),h=l.querySelector(".popup__input_type_profession");function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".elements");var _=function(){function e(t){var n=t.data,r=t.cardSelector,o=t.userId,i=t.handleCardClick,u=t.handleDeleteClick,a=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=n.link,this._title=n.name,this._id=n._id,this._likes=n.likes,this._owner=n.owner,this._ownerId=n.owner._id,this._userId=o,this._cardSelector=r,this._handleCardClick=i,this._handleDeleteClick=u.bind(this),this._handleLikeClick=a.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__photo"),this._likeElement=this._element.querySelector(".element__like"),this._trashBox=this._element.querySelector(".element__trash"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._setEventListeners(),this._handleDeleteBox(),this._handleLikes(),this.likeCountCard(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleDeleteBox",value:function(){this._ownerId!==this._userId&&this._trashBox.classList.add("element__trash_hidden")}},{key:"setLikeCount",value:function(e){this._likes=e.likes,this.likeCountCard(),this._handleLikes()}},{key:"likeCountCard",value:function(){this._likeCounter.textContent=this._likes.length}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"_handleLikes",value:function(){this.isLiked()?this._likeElement.classList.add("element__like_active"):this._likeElement.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeElement.addEventListener("click",(function(){e._handleLikeClick(e)})),this._trashBox.addEventListener("click",(function(){e._handleDeleteClick(e)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=m((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_showError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._errorClass),n.textContent=t,n.classList.add(r._activeInputErrorClass)})),v(this,"_hideError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._errorClass),t.classList.remove(r._activeInputErrorClass),t.textContent=""})),v(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),v(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),v(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners(),r._toggleButtonState(r._formElement)})),v(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),v(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),v(this,"disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),v(this,"resetForm",(function(){r._inputList.forEach((function(e){r._hideError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._activeInputErrorClass=t.activeInputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItemStart",value:function(e){this._container.prepend(e)}},{key:"addItemEnd",value:function(e){this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e){var t,n=e.popup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._formElement=t._popup.querySelector(".popup__content"),t._submitButton=t._popup.querySelector(".popup__save-button"),t._submitButtonValue=t._submitButton.textContent,t._inputList=Array.from(t._formElement.querySelectorAll(".popup__input")),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formData={},this._inputList.forEach((function(t){e._formData[t.name]=t.value})),this._formData}},{key:"setEventListeners",value:function(){var e=this;P(I(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){this._formElement.reset(),P(I(u.prototype),"closePopup",this).call(this)}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonValue}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function F(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._photoPopup=r._popup.querySelector(t),r._titleImagePopup=r._popup.querySelector(n),r}return t=u,(n=[{key:"openImage",value:function(e,t){this._photoPopup.src=e,this._photoPopup.alt=t,this._titleImagePopup.textContent=t,T(A(u.prototype),"openPopup",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function z(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e){var t,n=e.popup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._formElement=t._popup.querySelector(".popup__content"),t._submitButton=t._popup.querySelector(".popup__save-button"),t._submitButtonValue=t._submitButton.textContent,t}return t=u,(n=[{key:"openPopup",value:function(e){this._data=e,H(G(u.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;H(G(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._data)}))}},{key:"closePopup",value:function(){H(G(u.prototype),"closePopup",this).call(this),this._formElement.reset}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Удаление...":this._submitButtonValue}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(t){var n=t.profileNameSelector,r=t.profileProfessionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.profession}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y=null,Z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка")}},{key:"getUserInformation",value:function(){return fetch(this.url+"/users/me",{headers:this.headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch(this.url+"/cards",{headers:this.headers}).then(this._handleResponse)}},{key:"addNewCard",value:function(e){return fetch(this.url+"/cards/",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"handleDeleteCard",value:function(e){return fetch(this.url+"/cards/"+"".concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}},{key:"editProfileForm",value:function(e){return fetch(this.url+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.profession})}).then(this._handleResponse)}},{key:"editUserAvatar",value:function(e){return fetch(this.url+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}},{key:"handleLikeCard",value:function(e){return fetch(this.url+"/cards/likes/"+"".concat(e),{method:"PUT",headers:this.headers}).then(this._handleResponse)}},{key:"handleDislikeCard",value:function(e){return fetch(this.url+"/cards/likes/"+"".concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"a424a2e2-b3e0-48b0-ade8-2a601f78bd48","Content-Type":"application/json"}}),$=new W({profileNameSelector:".profile__name",profileProfessionSelector:".profile__subtitle",avatarSelector:".profile__avatar"});Promise.all([Z.getUserInformation(),Z.getInitialCards()]).then((function(e){$.setUserInfo({name:e[0].name,profession:e[0].about}),$.setUserAvatar(e[0].avatar),Y=e[0]._id,ue.renderItems(e[1])})).catch((function(e){console.log(e)}));var ee=new q({popup:n,handleFormSubmit:function(e){ee.renderLoading(!0);var t={name:e.place,link:e.link};Z.addNewCard(t).then((function(e){ue.addItemStart(ie(e))})).catch((function(e){console.log(e)})).finally((function(){ee.renderLoading(!1)})).then((function(){ee.closePopup()})),ae.disableButton(),ae.resetForm()}});ee.setEventListeners(),a.addEventListener("click",(function(){ae.resetForm(),c.reset(),ee.openPopup()}));var te=new U(r,".popup__photo",".popup__photo-title");te.setEventListeners();var ne=new q({popup:i,handleFormSubmit:function(e){ne.renderLoading(!0),Z.editUserAvatar(e).then((function(e){$.setUserAvatar(e)})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!0)})).then((function(){ne.closePopup()}))}});ne.setEventListeners(),s.addEventListener("click",(function(){le.resetForm(),p.reset(),ne.openPopup()}));var re=new q({popup:t,handleFormSubmit:function(e){re.renderLoading(!0),Z.editProfileForm(e).then((function(e){$.setUserInfo({name:e.name,profession:e.about})})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1)})).then((function(){re.closePopup()}))}});re.setEventListeners(),u.addEventListener("click",(function(){var e=$.getUserInfo();f.value=e.name,h.value=e.profession,se.resetForm(),re.openPopup()}));var oe=new K({popup:o,handleFormSubmit:function(e){oe.renderLoading(!0),Z.handleDeleteCard(e._id).then((function(){e.deleteCard()})).catch((function(e){console.log(e)})).finally((function(){oe.renderLoading(!1)})).then((function(){oe.closePopup()}))}});function ie(e){var t=new _({data:e,cardSelector:"#card-template",userId:Y,handleCardClick:function(e,t){te.openImage(t,e)},handleDeleteClick:function(e){oe.openPopup(e)},handleLikeClick:function(e){t.isLiked()?Z.handleDislikeCard(e._id).then((function(e){t.setLikeCount(e)})).catch((function(e){console.log(e)})):Z.handleLikeCard(e._id).then((function(e){t.setLikeCount(e)})).catch((function(e){console.log(e)}))}});return t.generateCard()}oe.setEventListeners();var ue=new g({renderer:function(e){ue.addItemEnd(ie(e))}},".elements"),ae=new b(e,c);ae.enableValidation();var se=new b(e,l);se.enableValidation();var le=new b(e,p);le.enableValidation()})();