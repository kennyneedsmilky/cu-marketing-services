/* CU Marketing Services */ "use strict"; console.log(new Date);

/* ***** DOM */
/* ***** */

const menuBtn = document.querySelector(".header__menu-btn"); // Menu Button
const menu = document.querySelector(".header__menu"); // Menu
const headerLinks = document.querySelectorAll(".header__link"); // Header Links
const heroImgBtn = document.querySelector(".hero-img__btn"); // Hero Image Button

/* ***** Event Handlers */
/* ***** */

//  Menu Button
menuBtn.addEventListener("click", () => {
    toggleMenu();
})

// Hero Image Button
heroImgBtn.addEventListener("click", () => {
    goToWhyChooseUs();
})

/* ***** Functions */
/* ***** */

// Toggle Menu
function toggleMenu() {
    // If the menu button isn't active...
    if (!menuBtn.classList.contains("active")) {
        menuBtn.disabled = true;
        menuBtn.classList.add("active");
        menuBtn.innerHTML = `<i class="fas fa-plus"></i>`;
        menu.classList.remove("hidden");
        setTimeout(() => {
            menuBtn.disabled = false;
        }, 250);
    } else {
        // If the menu button is active...
        menuBtn.disabled = true;
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
        menuBtn.classList.remove("active");
        menu.classList.add("close-menu");
        // We need this timeout for a close animation to happen.
        setTimeout(() => {
            menu.classList.add("hidden");
            menu.classList.remove("close-menu");
            menuBtn.disabled = false;
        }, 250);
    }
}

// Go to "Why Choose Us".
function goToWhyChooseUs() {
  window.location = "#why-choose-us";  
}