//inputs 
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('eMail');
const password = document.getElementById('pw');
const submitBtn = document.getElementById('subm');
const formSpace = document.querySelectorAll('.form-space');

let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

//It doesn't show the 'error' icons at the beginning
formSpace.forEach( el => {
    el.style.background = 'none';
});


const invalidInput = (name, error) => {
    error.style.display = 'block';
    name.style.border = '1px solid red';
    name.style.background = '';
}

const validInput = (name, error) => {
    error.style.display = '';
    name.style.border = '1px solid var(--green)';
    name.style.background = 'none';
} 

const validateEmail = () => {
    let emValidate = expReg.test(email.value);
    if(emValidate === false){
        invalidInput(email, errMail);
    } else {
        validInput(email, errMail);
    }
}

const validatePassword = () => {
    if(password.value < 12){
        invalidInput(password, errPass);
    } else {
        validInput(password, errPass);
    }
}


const validateForm = () => {
    if(firstName.value === ''){
        invalidInput(firstName, errFName);
    } else {
        validInput(firstName, errFName);
    }
    if(lastName.value === ''){
        invalidInput(lastName, errLName);
    } else {
        validInput(lastName, errLName);
    }
    validateEmail();
    validatePassword();
}

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    validateForm();
})












