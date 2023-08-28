import { first } from "lodash";

function loadFormValidations () {
    const pwPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
    const errorMsg1 = 'Please enter only upper and lower case letters.';
    const errorMsg2 = 'Please enter a five digit zip code. Example: 12345';

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
    firstNameInput.placeholder = 'John';
    firstNameInput.pattern = '[a-zA-Z ]+';
    firstNameInput.name = 'userFirstName';
    firstNameInput.title = 'Please enter your first name. Only alphabetical characters'

    lastNameInput.type = 'text';
    lastNameInput.placeholder = 'Doe';
    lastNameInput.pattern = '[a-zA-Z ]+';
    lastNameInput.name = 'userLastName';
    lastNameInput.title = 'Please enter your last name. Only alphabetical characters'

    emailInput.type = 'email';
    emailInput.placeholder = 'JohnDoe@gmail.com';
    emailInput.name = 'userEmail';
    emailInput.title = 'Please enter your email. Example: JohnDoe@gmail.com.'

    countryInput.type = 'text';
    countryInput.placeholder = 'United States';
    countryInput.pattern = '[a-zA-Z ]+';
    countryInput.name = 'userCountry';
    countryInput.title = 'Please enter your country name. Example: United States.'


    zipInput.type = 'text';
    zipInput.placeholder = '90210';
    zipInput.pattern = '\\d{5}';
    zipInput.name = 'userZip';
    zipInput.title = 'Please enter a five digit zip code. Example: 12345';

    pwInput.type = 'password';
    pwInput.pattern = pwPattern;
    pwInput.name = 'userPw';
    pwInput.title = 'Please enter a password with at least one lower case letter, one upper case letter and a number.';

    pwConfInput.type = 'password';
    pwConfInput.name = 'userPwConf';
    pwConfInput.title = 'Please re-enter your password.';

    //functions

    function setValidityMessage (input, message) {
        input.addEventListener('input', () => {
            input.setCustomValidity('');
            if (!input.validity.valid) {
                input.setCustomValidity(message);
            }
            else {
                input.setCustomValidity('');
            }
        });
    }

    //listeners

    firstNameInput.addEventListener('blur', function (){firstNameInput.reportValidity();});
    lastNameInput.addEventListener('blur', function (){lastNameInput.reportValidity();});
    countryInput.addEventListener('blur', function (){countryInput.reportValidity();});
    zipInput.addEventListener('blur', function (){zipInput.reportValidity();});
    pwInput.addEventListener('blur', function (){pwInput.reportValidity();});
    pwConfInput.addEventListener('blur', function (){pwConfInput.reportValidity();});

    firstNameInput.addEventListener('input', setValidityMessage(firstNameInput, errorMsg1));
    lastNameInput.addEventListener('input', setValidityMessage(lastNameInput, errorMsg1));
    countryInput.addEventListener('input', setValidityMessage(countryInput, errorMsg1));  
    zipInput.addEventListener('input', setValidityMessage(zipInput, errorMsg2));

    pwConfInput.addEventListener('input', () => {
        if (pwConfInput.value !== pwInput.value) {
            pwConfInput.setCustomValidity('Passwords do not match.');
        }
        else {
            pwConfInput.setCustomValidity('');
        }
    });
}

export default loadFormValidations;