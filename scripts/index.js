let popUp = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.edit-form__close-button');

let formElement = document.querySelector('.edit-form');
let nameInput = formElement.querySelector('#profile-name');
let jobInput = formElement.querySelector('#profile-caption');

let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileCaption = profile.querySelector('.profile__caption');

let likeButtons = document.querySelectorAll('.element__like-button');

init();

function togglePopup() {
    let popUpStatus = 'popup_status_opened';

    nameInput.value = profileName.innerText;
    jobInput.value = profileCaption.innerText;

    popUp.classList.toggle(popUpStatus);
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    updateProfile(nameInput.value, jobInput.value);
    togglePopup();
}

function updateProfile(name, caption) {
    profileName.innerText = name;
    profileCaption.innerText = caption;
}

function likeButtonActive(evt) {
    let likeButtonStatus = 'element__like-button_status_active';
    evt.srcElement.classList.toggle(likeButtonStatus);
}

function init() {
    updateProfile('Жак-Ив Кусто', 'Исследователь океана');

    openPopupButton.addEventListener('click', togglePopup);
    closePopupButton.addEventListener('click', togglePopup);
    formElement.addEventListener('submit', formSubmitHandler);
    likeButtons.forEach(item => item.addEventListener('click', likeButtonActive));
}