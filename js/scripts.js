// Contact Form Validation
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    // Add more validation rules as necessary
    alert("Thank you for your submission!"); // Feedback message
    return true; // Proceed with form submission
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('nightModeToggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
    });

    adjustBodyPadding();

    // Recalculate body padding when the window is resized, in case the header height changes.
    window.addEventListener('resize', adjustBodyPadding);
});

function adjustBodyPadding() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;
}
