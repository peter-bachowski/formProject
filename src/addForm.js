function addForm () {
    const mainBody = document.querySelector('.mainBody');
    const formContainer = document.createElement('div');
    const formTitle = document.createElement('div');

    const firstNameLabel = document.createElement('label');
    const lastNameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const countryLabel = document.createElement('label');
    const zipLabel = document.createElement('label');
    const pwLabel = document.createElement('label');
    const pwConfLabel = document.createElement('label');

    const firstNameInput = document.createElement('input');
    const lastNameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const countryInput = document.createElement('input');
    const zipInput = document.createElement('input');
    const pwInput = document.createElement('input');
    const pwConfInput = document.createElement('input');

    const firstNameContainer = document.createElement('div');
    const lastNameContainer = document.createElement('div');
    const emailContainer = document.createElement('div');
    const countryContainer = document.createElement('div');
    const zipContainer = document.createElement('div');
    const pwContainer = document.createElement('div');
    const pwConfContainer = document.createElement('div');

    formTitle.classList.add('formTitle');
    formContainer.classList.add('formContainer');
    firstNameContainer.classList.add('firstNameContainer');
    lastNameContainer.classList.add('lastNameContainer');
    emailContainer.classList.add('emailContainer');
    countryContainer.classList.add('countryContainer');
    zipContainer.classList.add('zipContainer');
    pwContainer.classList.add('pwContainer');
    pwConfContainer.classList.add('pwConfContainer');

    formTitle.innerText = 'Sign Up Form';

    firstNameLabel.for = 'firstName';
    firstNameLabel.innerText = 'First Name: ';
    lastNameLabel.for = 'lastName';
    lastNameLabel.innerText = 'Last Name: ';
    emailLabel.for = 'email';
    emailLabel.innerText = 'Email: ';
    countryLabel.for = 'country';
    countryLabel.innerText = 'Country: ';
    zipLabel.for = 'zipCode';
    zipLabel.innerText = 'Zip Code: ';
    pwLabel.for = 'pw';
    pwLabel.innerText = 'Password: ';
    pwConfLabel.for = 'pwConf';
    pwConfLabel.innerText = 'Password Confirmation: ';

    firstNameInput.type = 'text';
    firstNameInput.pattern = '[a-zA-Z ]+';
    firstNameInput.name = 'userFirstName';
    firstNameInput.id = 'userFirstName';

    lastNameInput.type = 'text';
    lastNameInput.pattern = '[a-zA-Z ]+';
    lastNameInput.name = 'userLastName';
    lastNameInput.id = 'userLastName';

    emailInput.type = 'email';
    //emailInput.pattern = '[a-zA-Z ]+';
    emailInput.name = 'userEmail';
    emailInput.id = 'userEmail';

    countryInput.type = 'text';
    countryInput.pattern = '[a-zA-Z ]+';
    countryInput.name = 'userCountry';
    countryInput.id = 'userCountry';

    zipInput.type = 'text';
    zipInput.pattern = '[a-zA-Z ]+';
    zipInput.name = 'userZip';
    zipInput.id = 'userZip';

    pwInput.type = 'text';
    pwInput.pattern = '[a-zA-Z ]+';
    pwInput.name = 'userPw';
    pwInput.id = 'userPw';

    pwConfInput.type = 'text';
    pwConfInput.pattern = '[a-zA-Z ]+';
    pwConfInput.name = 'userPwConf';
    pwConfInput.id = 'userPwConf';

    firstNameContainer.appendChild(firstNameLabel);
    firstNameContainer.appendChild(firstNameInput);
    lastNameContainer.appendChild(lastNameLabel);
    lastNameContainer.appendChild(lastNameInput);
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);
    countryContainer.appendChild(countryLabel);
    countryContainer.appendChild(countryInput);
    zipContainer.appendChild(zipLabel);
    zipContainer.appendChild(zipInput);
    pwContainer.appendChild(pwLabel);
    pwContainer.appendChild(pwInput);
    pwConfContainer.appendChild(pwConfLabel);
    pwConfContainer.appendChild(pwConfInput);

    formContainer.appendChild(formTitle);
    formContainer.appendChild(firstNameContainer);
    formContainer.appendChild(lastNameContainer);
    formContainer.appendChild(emailContainer);
    formContainer.appendChild(countryContainer);
    formContainer.appendChild(zipContainer);
    formContainer.appendChild(pwContainer);
    formContainer.appendChild(pwConfContainer);

    mainBody.appendChild(formContainer);
    
}

export default addForm;