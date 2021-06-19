"use strict";
const testimonyBox = document.querySelector(".testimony-box");

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
    },
]


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