
const сonfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input-error',
    activeinputErrorClass: 'popup__input-error_active',
    errorClass: 'popup__input_type_error',
  }; 
  
  //выбираем элемент ошибки на основе уникального класса
  /*const form = document.querySelector('.popup__content') //все формы
  const formInput = form.querySelector('.popup__input');   //инпут
  const formError = form.querySelector(`.${formInput.id}-error`); //ошибка*/

  //ПОКАЗАТЬ ОШИБКУ:
  //----------------------------------------------------------------------------
  const showError = (formElement, inputElement, errorMessage, сonfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(сonfig.errorClass); //это красная линия
    errorElement.textContent = errorMessage;      //копирование текста ошибки
    errorElement.classList.add(сonfig.activeinputErrorClass) //активирование ошибки
  };

  //СКРЫТЬ ОШИБКУ:
  //----------------------------------------------------------------------------
  const hideError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.errorClass);
    errorElement.classList.remove(config.activeinputErrorClass);
    errorElement.textContent = '';
  };

  //ПРОВЕРКА ФОРМЫ: проходит - ошибка отражается
  //------------------------------------------------------------------------------
  const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, config);
      console.log(formElement);
    } else {
      hideError(formElement, inputElement, config);
    }
  };

  //СЛУШАТЕЛЬ НА ПОЛЕ ВВОДА
  //------------------------------------------------------------------------------
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));//все инпуты
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    console.log(inputList, formElement);

   /* toggleButtonState(inputList, buttonElement);*/

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, config);
        //сверяем состояние кнопки при каждом изменении формы
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  };

  //ОБРАБОТЧИК ФОРМ - добавление обработчиков всем формам
  //----------------------------------------------------------
  const  enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    console.log(formList);

    formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
       setEventListeners(formElement, config);
    });
  };

    //ВЫЗОВ ФУНКЦИИ
   //---------------------------------------------------------------
   enableValidation(сonfig);
    
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
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
    }
  };

//ОЧИСТКА 
//-----------------------------------------------------------------
  function disableButton(buttonElement, {submitButtonSelector, inactiveButtonClass, ...rest}) {
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
    /*buttonElement.classList.add(validationConfig.inactiveButtonClass);*/
  }

 

  


  





/*const disableButton = (formElement) => {
     const buttonList = Array.from(formElement.querySelectorAll('.popup__save-button'));
     buttonList.forEach((buttonElement) => {
       buttonElement.classList.add('.popup__save-button_inactive')
       console.log(buttonElement);
     })
   }*/