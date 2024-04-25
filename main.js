import Swup from 'https://unpkg.com/swup@4?module';

function init() {
    if (document.querySelector('.nav-toggle')) 
    {     // new Carousel('#carousel')   
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.mobile__nav__container');

        navToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-nav--visible');
    })
    }   
    if (document.querySelector('.toggle')) 
    {     // $('#lightbox').lightbox()  
        const closeToggle = document.querySelector('.toggle');
        const mobileNavContainer = document.querySelector('.mobile__nav__container');


        mobileNavContainer.addEventListener('click', () => {
        mobileNavContainer.classList.toggle('mobile-nav--visible'); 
    })
    }}

    const swup = new Swup(); 
    // Run once when page loads
    if (document.readyState === 'complete') {
        init(); 
    } else {   
        document.addEventListener('DOMContentLoaded', () => init()); 
    } 
    // Run after every additional navigation by swup 
    swup.hooks.on('page:view', () => init());
