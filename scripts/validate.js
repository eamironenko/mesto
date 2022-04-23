const config = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input-error',
    activeinputErrorClass: 'popup__input-error_active',
    errorClass: 'popup__input_type_error',
}; 

//ПОКАЗАТЬ ОШИБКУ:
//----------------------------------------------------------------------------
  const showError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.errorClass); //это красная линия
    errorElement.textContent = errorMessage;      //копирование текста ошибки
    errorElement.classList.add(config.activeinputErrorClass) //активирование ошибки
  };

//СКРЫТЬ ОШИБКУ:
//----------------------------------------------------------------------------
  const hideError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.errorClass);
    errorElement.classList.remove(config.activeinputErrorClass);
    errorElement.textContent = '';
  };

//ПРОВЕРИТЬ ФОРМЫ:
//------------------------------------------------------------------------------
  const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideError(formElement, inputElement, config);
    }
  };

//СЛУШАТЕЛЬ НА ПОЛЕ ВВОДА
//------------------------------------------------------------------------------
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));//все инпуты
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  };

//ОБРАБОТЧИК ФОРМ
//----------------------------------------------------------
  const  enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
       setEventListeners(formElement, config);
    });
  };

//ПРОВЕРКА ВАЛИДНОСТИ ФОРМ
//-----------------------------------------------------------
  const hasInvalidInput = (inputList) => {
    //проходим по массиву
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

//ВКЛЮЧЕНИЕ И ВЫКЛЮЧЕНИЕ КНОПКИ
  const toggleButtonState = (inputList, buttonElement, config) => {
    //если есть один невалидный вариант
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

//ОЧИСТКА ФОРМЫ-КАРТОЧКИ 
//-----------------------------------------------------------------
  function disableButton(buttonElement, config) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
  };

  function resetForm(formElement, config) {
      const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
      inputList.forEach((inputElement) => {
        hideError(formElement, inputElement, config);
      });
    }

//ВЫЗОВ ФУНКЦИИ
//---------------------------------------------------------------
  enableValidation(config);