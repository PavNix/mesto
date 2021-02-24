let popUp = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.edit-form__close-button');

let formElement = document.querySelector('.edit-form');
let nameInput = formElement.querySelector('#profile-name');
let jobInput = formElement.querySelector('#profile-caption');

let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileCaption = profile.querySelector('.profile__caption');

init();

function togglePopup() {
    let popUpStatus = 'popup_status_opened';
    
    if(!popUp.classList.contains(popUpStatus)){
        nameInput.value = profileName.innerText;
        jobInput.value = profileCaption.innerText;
    }

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

function init() {
    updateProfile('Жак-Ив Кусто', 'Исследователь океана');

    openPopupButton.addEventListener('click', togglePopup);
    closePopupButton.addEventListener('click', togglePopup);
    formElement.addEventListener('submit', formSubmitHandler);
}