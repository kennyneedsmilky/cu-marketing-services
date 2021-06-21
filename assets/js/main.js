/* CU Marketing Services */ "use strict"; console.log(new Date);

/* ***** DOM */
const heroImgBtn = document.querySelector(".hero-img__btn"); // Hero Image Button

/* ***** Event Handlers */

// Hero Image Button
heroImgBtn.addEventListener("click", () => {
    goToWhyChooseUs();
})


/* ***** Functions */

// Go to "Why Choose Us".
function goToWhyChooseUs() {
  window.location = "#why-choose-us";  
}