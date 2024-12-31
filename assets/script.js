const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const thankYouMessage = document.getElementById('thankYouMessage');
const form = document.getElementById('emailForm');

// Enable the submit button when a valid email is entered
emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    submitButton.textContent = 'THANKS!';
        
emailInput.value = '';
});









