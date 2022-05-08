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
    constructor(config) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._activeInputErrorClass = config.activeInputErrorClass;
        this._errorClass = config.errorClass;
        this._buttonAdd = config.buttonAdd;
        this._buttonEdit = config.buttonEdit;
    }

    _showError = (inputElement, errorMessage) => {
        const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
        this._inputElement.classList.add(this._errorClass); //это красная линия
        this._errorElement.textContent = errorMessage;      //копирование текста ошибки
        this._errorElement.classList.add(this._activeInputErrorClass); //активирование 
    };

    _hideError = (inputElement) => {
        const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        errorElement.classList.remove(this._activeInputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hideError(inputElement);
        }
    };

    _setEventListeners = () => {
        const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
        const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
        this._toggleButtonState();

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidation = () => {
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(this._formSelector);
        this._buttonEdit.addEventListener('click', () => { this.resetForm() });
        this._buttonAdd.ddEventListener('click', () => { this.resetForm() });
    };

    _hasInvalidInput = () => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    disableButton = () => {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = true;
    };

    resetForm = () => {
        inputList.forEach((inputElement) => {
            this._hideError(inputElement);
        });
    };
}

