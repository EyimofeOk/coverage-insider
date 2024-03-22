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

let currentCoverIndex = 0;
const covers = [
    {
        img: "images/maincover1.jpg",
        caption: "<em>On the Grid</em>, by Klaas Verplancke"
    },
    {
        img: "images/latest_issue.jpg",
        caption: "<em>Another Title</em>, by Another Artist"
    },
    {
        img: "images/latest_issue.jpg",
        caption: "<em>Third Title</em>, by Another Artist"
    },    {
        img: "images/latest_issue.jpg",
        caption: "<em>Another One Title</em>, by Another Artist"
    },
];

function navigateCover(direction) {
    currentCoverIndex += direction;
    if (currentCoverIndex >= covers.length) {
        currentCoverIndex = 0; // Loop back to the first cover
    } else if (currentCoverIndex < 0) {
        currentCoverIndex = covers.length - 1; // Loop back to the last cover
    }
    document.getElementById("magazineCover").src = covers[currentCoverIndex].img;
    document.querySelector(".cover-caption").innerHTML = covers[currentCoverIndex].caption;
}
