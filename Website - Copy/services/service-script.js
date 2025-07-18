/*
=================================================
==  DYNAMIC SERVICE PAGE SCRIPT V2             ==
==  Brains behind the beauty.                  ==
=================================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });


    // --- 2. PORTFOLIO SLIDESHOW (SWIPER.JS) ---
    const swiper = new Swiper('.portfolio-slider', {
        // Optional parameters
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Autoplay
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    // --- 3. ENHANCED FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) { // Check if FAQ exists on page
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const currentlyActive = document.querySelector('.faq-item.active');
                if (currentlyActive && currentlyActive !== item) {
                    currentlyActive.classList.remove('active');
                }
                item.classList.toggle('active');
            });
        });
    }

});
