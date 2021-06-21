/* ケンミル */ /* 神様最高 */ "use strict";

// Blog Container
const blogContainer = document.querySelector(".blog-container");

// Blogs
const blogList = [
    // Item
    { 
        title: "Audience Engagement", 
        picture: "",
        link: "https://cu-marketing-services-youraudience.blogspot.com/2021/06/what-does-your-audience-want.html"
    },
    // Item
    { 
        title: "How to Create Backlinks", 
        picture: "",
        link: "https://cumarketingservices.blogspot.com/2021/03/creating-backlinks.html"
    },
    // Item
    { 
        title: "Social Media Marketing Tips", 
        picture: "",
        link: "https://cu-marketing-services-socialmedia.blogspot.com/2021/06/social-media-marketing.html"
    },
]

/* Event Handlers */

// Blog Container
blogContainer.addEventListener("click", e => {
    if (e.target.getAttribute("data-blog-id")) {
        console.log(e.target.getAttribute("data-blog-id"));
        openBlog(e.target.getAttribute("data-blog-id"));
    }
    
})

// Blog List
blogList.forEach(blog => {
    renderBlog(blog);
})

/* Functions */
function renderBlog(blog) {
    blogContainer.insertAdjacentHTML("beforeend", 
    `
    <!-- Blog Item -->
    <div class="blog" data-blog-id="${blog.link}">
        <h2 class="blog__title">${blog.title}</h2>
    </div>
    `)
}

/* Open Blog */
function openBlog(link) {
    window.open(`${link}`);
}