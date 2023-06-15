const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const numberError = document.getElementById('number-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');



// Get the form element and listen for form submission
const form = document.documentElement.querySelector('button[type="submit"]');
form.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (firstNameInput.value === '') {
        firstNameError.textContent = '*This field is Required';
        firstNameError.style.color = 'red';
    }

    if (lastNameInput.value === '') {
        lastNameError.textContent = '*This field is Required';
        lastNameError.style.color = 'red';
    }

    if (emailInput.value === '') {
        emailError.textContent = '*This field is Required';
        emailError.style.color = 'red';
    }

    if (numberInput.value === '') {
        numberError.textContent = '*This field is Required';
        numberError.style.color = 'red';
    }

    if (passwordInput.value === '') {
        passwordError.textContent = '*This field is Required';
        passwordError.style.color = 'red';
    }

    if (confirmPasswordInput.value === '') {
        confirmPasswordError.textContent = '*This field is Required';
        confirmPasswordError.style.color = 'red';
    }

});

let errorText = '';
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        document.querySelector(`#${input.id}-error`).textContent = '';
        input.addEventListener("focus", function() {
            document.querySelector(`#${input.id}-error`).textContent = '';
        });

        input.addEventListener("blur", function() {
            console.log("Finished typing:", input.value);
            // Perform desired actions after finished typing
            console.log(input.checkValidity());

            if (input.id === 'password' && input.value.length < 8) {
                input.setCustomValidity('Password must be at least 8 characters');
                console.log(input.checkValidity());
            }
            else if (input.id === 'confirm-password' && input.value !== passwordInput.value) {
                input.setCustomValidity('Password does not match');
                console.log(input.checkValidity());
            }
            else {
                input.setCustomValidity('');
                console.log(input.checkValidity());
            }

            if (input.id ==='number' && (/\D/.test(input.value) || input.value.length < 11)) {
                console.log(/\D/.test(input.value));
                input.setCustomValidity('Invalid Phone Number');
                console.log(input.checkValidity());
            }
            else {
                input.setCustomValidity('');
                console.log(input.checkValidity());
            }
            
            if (input.checkValidity() === false && input.value !== '') {
                if (input.id === 'email') {
                    errorText = 'Invalid Email Address';
                }
                else if (input.id === 'number') {
                    errorText = 'Invalid Phone Number';
                }
                else if (input.id === 'password') {
                    errorText = 'Password must be at least 8 characters';
                }
                else if (input.id === 'confirm-password') {
                    errorText = 'Password does not match';
                }
                else {
                    errorText = 'This field is Required';
                }
                document.querySelector(`#${input.id}-error`).textContent = errorText;
                document.querySelector(`#${input.id}-error`).style.color = 'red';
            }
        }
        );
    })
});