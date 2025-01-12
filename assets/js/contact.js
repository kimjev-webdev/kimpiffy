

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

// contact form logic

// accessing elements for the contact form
const contactForm = document.querySelector('.contactForm');
const contactHeading = document.querySelector('.contactHeader h1');
const formFields = document.getElementById('formFields');
const thankYouMessage = document.getElementById('thankYouMessage');
const socialIcons = document.getElementById('socialIcons');

// handling form submission (for the contact form)
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // change heading text and hide the form fields
    contactHeading.textContent = 'SPEAK SOON!';
    formFields.classList.add('d-none');

    // show the thank-you message
    thankYouMessage.classList.remove('d-none');

    socialIcons.classList.remove('d-none');
});

