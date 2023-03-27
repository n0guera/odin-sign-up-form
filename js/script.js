const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeat-password');

function validateForm() {
    if (password.value === repeatPassword.value) {
        repeatPassword.setCustomValidity('');
    } else {
        repeatPassword.setCustomValidity('Passwords do not match');
    }
}