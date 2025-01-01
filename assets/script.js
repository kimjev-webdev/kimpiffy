// Footer Form Logic (Email Sign-Up Form)

// Accessing elements for the footer form
const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const emailForm = document.getElementById('emailForm');

// Enable/Disable Submit Button based on Email Validity
emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Handling form submission (for the footer form)
emailForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    submitButton.textContent = 'THANKS!'; // Change button text

    // Clear the input field and change its placeholder
    emailInput.value = '';
    emailInput.placeholder = 'ALL DONE...';
});

// Contact Form Logic

// Accessing elements for the contact form
const contactForm = document.querySelector('.contactForm');
const contactHeading = document.querySelector('.contactHeader h1');
const formFields = document.getElementById('formFields');
const thankYouMessage = document.getElementById('thankYouMessage');

// Handling form submission (for the contact form)
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Change heading text and hide the form fields
    contactHeading.textContent = 'SPEAK SOON!';
    formFields.classList.add('d-none');

    // Show the thank-you message
    thankYouMessage.classList.remove('d-none');
});
