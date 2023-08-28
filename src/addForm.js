function addForm () {
    const resizeWidth = 910;

    const mainBody = document.querySelector('.mainBody');
    const formContainer = document.createElement('form');
    const form = document.createElement('div');
    const formTitle = document.createElement('div');
    const submitBtn = document.createElement('button');

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

    formContainer.classList.add('formContainer');
    submitBtn.classList.add('submitBtn');
    formTitle.classList.add('formTitle');
    form.classList.add('form');
    firstNameContainer.classList.add('formItemContainer');
    lastNameContainer.classList.add('formItemContainer');
    emailContainer.classList.add('formItemContainer');
    countryContainer.classList.add('formItemContainer');
    zipContainer.classList.add('formItemContainer');
    pwContainer.classList.add('formItemContainer');
    pwConfContainer.classList.add('formItemContainer');

    firstNameInput.id = 'userFirstName';
    lastNameInput.id = 'userLastName';
    emailInput.id = 'userEmail';
    countryInput.id = 'userCountry';
    zipInput.id = 'userZip';
    pwInput.id = 'userPw';
    pwConfInput.id = 'userPwConf';    

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

    submitBtn.type = 'submit';
    submitBtn.innerText = 'Submit';

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
    form.appendChild(firstNameContainer);
    form.appendChild(lastNameContainer);
    form.appendChild(emailContainer);
    form.appendChild(countryContainer);
    form.appendChild(zipContainer);
    form.appendChild(pwContainer);
    form.appendChild(pwConfContainer);
    formContainer.appendChild(form);
    formContainer.appendChild(submitBtn);

    mainBody.appendChild(formContainer);

    //listeners

    window.addEventListener('resize', resizeElements);
    window.onload = resizeElements;

    //functions 

    function resizeElements () {
        if (mainBody.clientWidth <= resizeWidth) {
            form.classList.remove('full');
            form.classList.add('stretched');
        }
        else {

            form.classList.remove('stretched');
            form.classList.add('full');
        }
    }
    
}

export default addForm;