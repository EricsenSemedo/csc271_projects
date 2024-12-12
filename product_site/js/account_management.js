localStorage.setItem('LoggedInUser', '');
localStorage.setItem('ClickedGameCard', '');
localStorage.setItem('User', '');

import { userManager } from './user_manager.js';

var registerUsernameElement = document.querySelector('#register-username');
var registerPasswordElement = document.querySelector('#register-password');
var confirmPasswordElement = document.querySelector('#confirm-password');
var loginUsernameElement = document.querySelector('#login-username');
var loginPasswordElement = document.querySelector('#login-password');
var loginContainer = document.querySelector('.login-form');
var regsiterContainer = document.querySelector('.register-form');
var createANewAccountLink = loginContainer.querySelector('a');
var registerButtons = document.querySelector('.register-buttons');
var registerButton = document.querySelector('#register');
var backButton = document.querySelector('#back');
var errorMessageElements = document.querySelectorAll('.error-message');
var loginErrorMessageElement = document.querySelector('#login-error-message');

var originalUsernameColor = registerUsernameElement.style.borderColor;
var originalPasswordColor = registerPasswordElement.style.borderColor;
var originalConfirmPasswordColor = confirmPasswordElement.style.borderColor;

// Once the user clicks creaate a new account then that button dissappears
// the login login container disappears and then the register account container appears
function toggleLoginRegister() {
    if (loginContainer.style.display != 'none') {
        loginContainer.style.display = 'none';
        regsiterContainer.style.display = 'flex';
        registerButtons.style.display = 'flex';
    }
    else {
        loginContainer.style.display = 'flex';
        regsiterContainer.style.display = 'none';
        registerButtons.style.display = 'none';
        registerUsernameElement.style.borderColor = originalUsernameColor;
        registerPasswordElement.style.borderColor = originalPasswordColor;
        confirmPasswordElement.style.borderColor = originalConfirmPasswordColor;

        for(var i = 0; i < errorMessageElements.length; i++) {
            errorMessageElements[i].innerHTML = '';
        }
    }
}

// This function makes sure the user doesn't exist and creates a new user
// make sure the user enters at least 5 characters for the username and password
// make sure the user re-enters the password correctly
function createUser(event) {
    event.preventDefault(); // prevents the page from refreshing
    var username = registerUsernameElement.value;
    var password = registerPasswordElement.value;
    var confirmPassword = confirmPasswordElement.value;
    var validPassword = true;
    var validForm = true;

    if (username.length < 5) {
        errorMessageElements[0].innerHTML = 'Username must be at least 5 characters long <br>';
        registerUsernameElement.style.borderColor = 'red';
        validForm = false;
    }
    else {
        errorMessageElements[0].innerHTML = '';
        registerUsernameElement.style.borderColor = originalUsernameColor;
    }

    if (password.length < 5) {
        errorMessageElements[1].innerHTML = 'Password must be at least 5 characters long <br>';
        registerPasswordElement.style.borderColor = 'red';
        validForm = false;
    }
    else {
        errorMessageElements[1].innerHTML = '';
        registerPasswordElement.style.borderColor = originalPasswordColor;
    }

    if (confirmPassword != password) {
        errorMessageElements[2].innerHTML = 'Passwords do not match';
        confirmPasswordElement.style.borderColor = 'red';
        validPassword = false;
    }
    else {
        errorMessageElements[2].innerHTML = '';
        confirmPasswordElement.style.borderColor = originalConfirmPasswordColor;
    }

    // Create the user if the username and password are valid
    if (validPassword && validForm) {
        try {
            userManager.addUser(username, password);
            toggleLoginRegister();
        }
        catch (error) {
            error = error.message.replace(/^Error: /, ''); // removes the 'Error: ' from the error message
            errorMessageElements[0].innerHTML = error;
            registerUsernameElement.style.borderColor = 'red';
        }
    }
}

// This function logs the user in
function login(event) {
    event.preventDefault(); // prevents the page from refreshing
    var username = loginUsernameElement.value;
    var password = loginPasswordElement.value;

    try {
        userManager.login(username, password);
        window.location.assign('profile.html');
    }
    catch (error) {
        error = error.message.replace(/^Error: /, ''); // removes the 'Error: ' from the error message
        loginErrorMessageElement.innerHTML = error;
    }
}


function clearErrors() {
    loginErrorMessageElement.innerHTML = '';
    for(var i = 0; i < errorMessageElements.length; i++) {
        errorMessageElements[i].innerHTML = '';
    }
}

createANewAccountLink.addEventListener('click', toggleLoginRegister);
backButton.addEventListener('click', toggleLoginRegister);
registerButton.addEventListener('click', createUser);
loginContainer.addEventListener('submit', login);
regsiterContainer.addEventListener('submit', createUser);
loginUsernameElement.addEventListener('focus', clearErrors);
loginPasswordElement.addEventListener('focus', clearErrors);