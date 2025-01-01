// Footer

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

//Contact page

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 


    document.getElementById('contactHeading').textContent = 'SPEAK SOON!';
    document.getElementById('formFields').classList.add('d-none');
    document.getElementById('thankYouMessage').classList.remove('d-none');

});





