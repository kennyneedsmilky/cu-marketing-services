"use strict";
const testimonyBox = document.querySelector(".testimony-box"); // Testimony Box
const testimonyBoxBtns = document.querySelectorAll(".testimony-box__btn"); // Testimony Btns

// Client Ratings
const clientRatings = [
    { 
        clientPic: "person-001.jpg",
        clientName: "Shawn M.",
        rating: 5,
        message: "I started off using this company for half a year and generated over half a million dollars in just the first quarter! The lady I worked with was very professional and progressive. She offered great advice on how to increase my sales and leads and always kept me updated every step of the way. I highly recommend."
    },
    { 
        clientPic: "person-003.jpg",
        clientName: "Roneshia B.",
        rating: 5,
        message: "Candace was very prompt and professional with setting up my website for my business, she communicated the whole way through, made sure I understood how to navigate my site & also she keeps in contact with me jsut to make sure the site is up to date if need be. I highly recommend her to my friends and family."
    }
]

// SLide Count
let currentSlide = 1;
let numberOfSlides = clientRatings.length;
console.log(`The number of slides are ${numberOfSlides}.`);

/* Event Handlers */

// Generate testimonies for desktop.
clientRatings.forEach( testimony => {
    testimonyBox.insertAdjacentHTML("beforeend", `
    <!-- Testimony -->
    <div class="testimony">
        <img class="testimony__img" src="assets/img/${ testimony.clientPic }" alt="">
        <h2>${ testimony.clientName }</h2>
        <p class="testimony__rating">${ generateStars(testimony.rating) }</p>
        <p class="testimony__msg">${ testimony.message }</p>
    </div>
    `)
})

/* Generate Stars from thr rating. */
function generateStars (stars) {
    // 1 Star
    if(stars === 1) return `
    <i class="fas fa-star"></i>`;
    // 2 Stars
    if(stars === 2) return `
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>`;
    // 3 Stars
    if(stars === 3) return `
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>`;
    // 4 Stars
    if(stars === 4) return `
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>`;
    // 5 Stars
    if(stars === 5) return `
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>`;
}

// Last Testimony
testimonyBox.insertAdjacentHTML("beforeend", `
    <!-- Testimony -->
    <div class="testimony">
        <img class="testimony__img" src="assets/img/${ clientRatings[0].clientPic }" alt="">
        <h2>${ clientRatings[0].clientName }</h2>
        <p class="testimony__rating">${ generateStars( clientRatings[0].rating) }</p>
        <p class="testimony__msg">${ clientRatings[0].message }</p>
    </div>
`)

// Testimony Box Buttons
testimonyBoxBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        // Get a node list of all of the testimonies.
        const testimonies = document.querySelectorAll(".testimony");

        // If left...
        if(e.target.classList.contains("--left")) {
            sliderLeft(testimonies);
        }

        // If right...
        if(e.target.classList.contains("--right")) {
            sliderRight(testimonies);
        }
    })
})

setInterval(() => {
    const testimonies = document.querySelectorAll(".testimony");
    sliderRight(testimonies);
}, 15000);

/* Functions */

// Slider Left
function sliderLeft(testimonies) {
    // Check to see if the first slide
    if (currentSlide === 1) {
        currentSlide = numberOfSlides;
        // Go to the last slide.
        testimonies.forEach(item => {
            item.style.transform = `translateX(calc(-${(currentSlide - 1)}00% - ${(currentSlide - 1) * 2}rem))`;
        })
    } else {
        currentSlide -= 1;
        // Go to the previous slide.
        testimonies.forEach(item => {
            item.style.transform = `translateX(calc(-${(currentSlide - 1)}00% - ${(currentSlide - 1) * 2}rem))`;
        })
    }
}


// Slider Right
function sliderRight(testimonies) {
    // Check to see if the first slide
    if (currentSlide === numberOfSlides) {
        currentSlide = 1;
        // Go to the first slide.
        testimonies.forEach(item => {
            item.style.transform = `translateX(calc(${(currentSlide - 1)}00% - ${(currentSlide - 1) * 2}rem))`;
        })
    } else {
        currentSlide += 1;
        // Go to the next slide.
        testimonies.forEach(item => {
            item.style.transform = `translateX(calc(-${(currentSlide - 1)}00% - ${(currentSlide - 1) * 2}rem))`;
        })
    }

}