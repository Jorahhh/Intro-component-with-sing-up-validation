//inputs 
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('eMail');
const password = document.getElementById('pw');
const submitBtn = document.getElementById('subm');
const formSpace = document.querySelectorAll('.form-space');


//It doesn't show the 'error' icons at the beginning
formSpace.forEach( el => {
    el.style.background = 'none';
});

const validateForm = () => {
    let firstNameForm = document.forms['myForm']['firstName'].value;
    if(firstNameForm == ''){
        let errFName = document.getElementById('errFName');
        errFName.style.display = 'block';
        firstName.style.border = '1px solid red';
        firstName.style.background = '';
    } else {
        errFName.style.display = '';
        firstName.style.border = '1px solid var(--green)';
        firstName.style.background = 'none';
    }

    let lastNameForm = document.forms['myForm']['lastName'].value;
    if(lastNameForm === '') {
        let errLName = document.getElementById('errLName');
        errLName.style.display = 'block';
        lastName.style.border = '1px solid red';
        lastName.style.background = '';
    } else {
        errLName.style.display = '';
        lastName.style.border = '1px solid var(--green)';
        lastName.style.background = 'none';
    }

    let emailForm = document.forms['myForm']['email'].value;
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let emValidate = expReg.test(emailForm);
    if(emValidate === false){
        let errMail = document.getElementById('errMail');
        errMail.style.display = 'block';
        email.style.border = '1px solid red';
        email.style.background = '';
    } else {
        errMail.style.display = '';
        email.style.border = '1px solid var(--green)';
        email.style.background = 'none';
    }

    let passwordForm = document.forms['myForm']['password'].value;
    if(passwordForm.length < 6) {
        let errPass = document.getElementById('errPass');
        errPass.style.display = 'block';
        password.style.border = '1px solid red';
        password.style.background = '';
    } else {
        errPass.style.display = '';
        password.style.border = '1px solid var(--green)';
        password.style.background = 'none';
    }
}



submitBtn.addEventListener('click', event => {
    event.preventDefault();
    validateForm();
    alertPop();
})

