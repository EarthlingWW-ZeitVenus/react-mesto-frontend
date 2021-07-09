// const profileEditButton = document.querySelector('.profile__edit-button');
// const profileAddButton = document.querySelector('.profile__add-button');
// const popupProfileForm = document.forms.profileinfo;
// const popupProfileFormFullName = popupProfileForm.elements.name;
// const popupProfileFormProfession = popupProfileForm.elements.about;
// const profileAvatar = document.querySelector('.profile__avatar');
  
  //Объекты настроек классов cardData, validatorData, popupData и apiData
  const cardData = {
    templateSelector: '#template-element',
    imageSelector: '.element__image',
    deleteButtonSelector: '.element__delete',
    likeButtonSelector: '.element__like',
    textSelector: '.element__text',
    templateElement: '.element',
    elementLikeActive: 'element__like_active',
    popupThemeImage: '.popup_theme_image',
    containerSelector: '.elements__list',
    likesNumberSelector: '.element__like-number'
  }
  const validatorData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_theme_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }
  const popupData = {
    popupProfile: '.popup_theme_profile',
    popupPlace: '.popup_theme_place',
    popupImage: '.popup_theme_image',
    popupDelete: '.popup_theme_delete',
    popupAvatar: '.popup_theme_avatar'
  }
  const apiData = {
    url: 'https://mesto.nomoreparties.co/v1',
    cohortId: 'cohort-21',
    token: '5c233d66-a804-4163-848b-90319eaed808',
    authUrl: 'https://auth.nomoreparties.co'
  }

  export { cardData, validatorData, popupData, apiData };
  