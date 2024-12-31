const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('emailForm');


emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    submitButton.textContent = 'THANKS!';

    emailInput.value = ''; 
    emailInput.placeholder = 'ALL DONE...';
});









