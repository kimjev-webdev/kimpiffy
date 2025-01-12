// Footer Form Logic (Email Sign-Up Form)

// accessing elements for the footer form
const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const emailForm = document.getElementById('emailForm');

// enable/disable submit button 
emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// handling footer form submission 
emailForm.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting

    submitButton.textContent = 'THANKS!'; // change button text

// Clear the input field and change its placeholder
    emailInput.value = '';
    emailInput.placeholder = 'ALL DONE...';
});
