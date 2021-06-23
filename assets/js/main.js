/* CU Marketing Services */ "use strict"; console.log(new Date);

/* ***** DOM */
/* ***** */

const headerLinks = document.querySelectorAll(".header__link"); // Header Links
const menuBtn = document.querySelector(".header__menu-btn"); // Menu Button
const menu = document.querySelector(".header__menu"); // Menu
const heroImgBtn = document.querySelector(".hero-img__btn"); // Hero Image Button
const pages = document.querySelectorAll(".page"); // Pages
const phoneBtn = document.querySelector(".phone-btn"); // Phone Button

/* ***** Event Handlers */
/* ***** */

// Header Links
headerLinks.forEach(link => {
    link.addEventListener("click", e => {
        renderPage(e.target.getAttribute("data-page-id"));
    })
})

//  Menu Button
menuBtn.addEventListener("click", () => {
    toggleMenu();
})

// Hero Image Button
heroImgBtn.addEventListener("click", () => {
    goToWhyChooseUs();
})

// Phone Button
phoneBtn.addEventListener("click", () => {
    callCompany();
})

/* ***** Functions */
/* ***** */

// Render Page
function renderPage(pageID) {
    // First hide all the pages.
    pages.forEach(page => page.classList.add("hidden"));
    // Remove active classes on all links.
    headerLinks.forEach(link => link.classList.remove("active"));
    // Show a page if it matches the ID.
    pages.forEach(page => {
        if(page.getAttribute("data-page-id") === pageID) page.classList.remove("hidden");
    })
    // Turn link active if it matched the ID.
    headerLinks.forEach(link => {
        if (link.getAttribute("data-page-id") === pageID) link.classList.add("active");
    });
    // Close menu if mobile.
    closeMenu();
}

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
        closeMenu();
    }
}

// Close Menu
function closeMenu() {
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

// Go to "Why Choose Us".
function goToWhyChooseUs() {
  window.location = "#why-choose-us";  
}

// Call Company
function callCompany() {
    window.open("tel:8175359080");
}