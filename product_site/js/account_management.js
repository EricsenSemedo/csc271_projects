localStorage.setItem('LoggedInUser', '');
localStorage.setItem('ClickedGameCard', '');

var registerUsernameElement = document.querySelector('#register-username');
var registerPasswordElement = document.querySelector('#register-password');
var confirmPasswordElement = document.querySelector('#confirm-password');
var loginUsernameElement = document.querySelector('#login-username');
var loginPasswordElement = document.querySelector('#login-password');
var loginContainer = document.querySelector('.login-form');
var regsiterContainer = document.querySelector('.register-form');
var createANewAccountLink = loginContainer.querySelector('a');
var registerButton = document.querySelector('#register');
var backButton = document.querySelector('#back');
var errorMessageElements = document.querySelectorAll('.error-message');

var originalUsernameColor = registerUsernameElement.style.borderColor;
var originalPasswordColor = registerPasswordElement.style.borderColor;
var originalConfirmPasswordColor = confirmPasswordElement.style.borderColor;

// Algorithm to show recommended games

// This function shows the history of the recent games the user had looked at

// This function shows the games the user owns

// check if user exists in local storage
function checkUser() {}

// This function makes sure the user doesn't exist and creates a new user
// make sure the user enters at least 5 characters for the username and password
// make sure the user re-enters the password correctly
function createUser() {
    var username = registerUsernameElement.value;
    var password = registerPasswordElement.value;
    var confirmPassword = confirmPasswordElement.value;
    var userList = JSON.parse(localStorage.getItem('Users')) || []; // se
    var validUsername = true;
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

    // checks if the username/password is already in the database
    if (validForm && userList != null) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].name == username) {
                errorMessageElements[0].innerHTML = 'Username already exists';
                registerUsernameElement.style.borderColor = 'red';
                validUsername = false;

                break;
            }
        }
    }

    // Create the user if the username and password are valid
    if (validUsername && validPassword && validForm) {
        var user = {
            'name': username,
            'password': password,
            'ownedGames': [],
            'recentGames': [],
        };
        userList.push(user);
        localStorage.setItem('Users', JSON.stringify(userList));
    }
}

// This function logs the user in
function login(event) {
    event.preventDefault(); // prevents the page from refreshing
    var username = loginUsernameElement.value;
    var password = loginPasswordElement.value;
    var userList = JSON.parse(localStorage.getItem('Users')) || [];

    if (userList != null) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].name == username && userList[i].password == password) {
                validUser = true;
                localStorage.setItem('LoggedInUser', username);
                window.location.assign('profile.html')
                break;
            }
        }
    }
}

// Once the user clicks creaate a new account then that button dissappears
// the login login container disappears and then the register account container appears
function toggleLoginRegister() {
    if (loginContainer.style.display != 'none') {
        loginContainer.style.display = 'none';
        regsiterContainer.style.display = 'flex';
        registerButton.style.display = 'flex';
        backButton.style.display = 'flex';
    }
    else {
        loginContainer.style.display = 'flex';
        regsiterContainer.style.display = 'none';
        registerButton.style.display = 'none';
        backButton.style.display = 'none';
        registerUsernameElement.style.borderColor = originalUsernameColor;
        registerPasswordElement.style.borderColor = originalPasswordColor;
        confirmPasswordElement.style.borderColor = originalConfirmPasswordColor;

        for(var i = 0; i < errorMessageElements.length; i++) {
            errorMessageElements[i].innerHTML = '';
        }
    }
}

createANewAccountLink.addEventListener('click', toggleLoginRegister);
registerButton.addEventListener('click', createUser);
backButton.addEventListener('click', toggleLoginRegister);
loginContainer.addEventListener('submit', login);