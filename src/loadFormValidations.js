function loadFormValidations () {
    const pwPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';

    const firstNameInput = document.querySelector('#userFirstName');
    const lastNameInput = document.querySelector('#userLastName');
    const emailInput = document.querySelector('#userEmail');
    const countryInput = document.querySelector('#userCountry');
    const zipInput = document.querySelector('#userZip');
    const pwInput = document.querySelector('#userPw');
    const pwConfInput = document.querySelector('#userPwConf');

    firstNameInput.required = true;
    lastNameInput.required = true;
    emailInput.required = true;
    countryInput.required = true;
    zipInput.required = true;
    pwInput.required = true;
    pwConfInput.required = true;

    firstNameInput.type = 'text';
    firstNameInput.pattern = '[a-zA-Z ]+';
    firstNameInput.name = 'userFirstName';
    firstNameInput.title = 'Please enter your first name. Only alphabetical characters'

    lastNameInput.type = 'text';
    lastNameInput.pattern = '[a-zA-Z ]+';
    lastNameInput.name = 'userLastName';
    lastNameInput.title = 'Please enter your last name. Only alphabetical characters'

    emailInput.type = 'email';
    emailInput.name = 'userEmail';

    countryInput.type = 'text';
    countryInput.pattern = '[a-zA-Z ]+';
    countryInput.name = 'userCountry';

    zipInput.type = 'text';
    zipInput.pattern = '\\d{5}';
    zipInput.name = 'userZip';
    zipInput.title = 'Please enter a five digit zip code. Example: 12345';

    pwInput.type = 'password';
    pwInput.pattern = pwPattern;
    pwInput.name = 'userPw';

    pwConfInput.type = 'password';
    pwConfInput.pattern = pwPattern;
    pwConfInput.name = 'userPwConf';
}

export default loadFormValidations;