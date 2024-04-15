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
        caption: "<em>New Issue</em>"
    },
    {
        img: "images/IMG_4684.jpg",
        caption: "<em>No one really knows what PR is</em>."
    },
    {
        img: "images/IMG_4685.jpg",
        caption: "<em>We've heard people say that PR is not introvert-friendly</em>."
    },    
    {
        img: "images/IMG_4686.jpg",
        caption: "<em>How much following up is too much following up?</em>"
    },
    {
        img: "images/IMG_4687.jpg",
        caption: "<em>To pitch or not to pitch?</em>"
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

document.addEventListener("DOMContentLoaded", function() {
    const articleSection = document.querySelector('.article-preview-section');
    const calendarSection = document.querySelector('.events-calendar-section');
  
    // Adjust the height of the shorter section to match the taller one
    const maxHeight = Math.max(articleSection.offsetHeight, calendarSection.offsetHeight);
    articleSection.style.height = `${maxHeight}px`;
    calendarSection.style.height = `${maxHeight}px`;
  });

  
// to highlight overflowing elements directly on the page:
/* document.querySelectorAll('*').forEach(element => {
    if (element.offsetWidth > document.documentElement.clientWidth) {
      console.log('Overflowing element:', element.tagName, 'Class:', element.className);
      // Highlight the element by setting a red border around it
      element.style.border = "2px solid red";
    }
  }); */
