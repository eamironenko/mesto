export const config = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input-error',
    activeInputErrorClass: 'popup__input-error_active',
    errorClass: 'popup__input_type_error',
    buttonEdit: '.profile__edit-button',
    buttonAdd: '.profile__add-button',
};

export class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._activeInputErrorClass = config.activeInputErrorClass;
        this._errorClass = config.errorClass;
        this._buttonAdd = config.buttonAdd;
        this._buttonEdit = config.buttonEdit;
        this._formElement = formElement

        this._formElement = document.querySelector(this._formSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
    

    _showError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._errorClass) //это красная линия
        errorElement.textContent = errorMessage;      //копирование текста ошибки
        errorElement.classList.add(this._activeInputErrorClass); //активирование 
    };

    _hideError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        errorElement.classList.remove(this._activeInputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        console.log(inputElement)
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hideError(inputElement);
        }
    };

    _setEventListeners = (inputList, buttonElement) => {
        this._toggleButtonState(inputList, buttonElement);
        console.log(this._inputList);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    enableValidation = () => {
        
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        console.log(this._formElement);
        this._setEventListeners(this._formElement);
        this._toggleButtonState(this._formElement);
//return this._formElement
    };

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    disableButton = () => {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    };

    resetForm = () => {
        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement);
        });
    };
}

