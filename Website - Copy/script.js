// This function runs when the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save the new theme
    });

    // --- On-Scroll Fade-In Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each fade-in element
    fadeElements.forEach((el, index) => {
        // Set a CSS variable for staggered delays in grids
        el.style.setProperty('--i', index);
        observer.observe(el);
    });
    
    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Show button if user has scrolled down more than 300px
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // --- Client Logo Carousel ---
    // This makes the scrolling seamless by cloning the logos
    const track = document.querySelector('.logo-track');
    if(track) {
        // Get all logos inside the track
        const logos = Array.from(track.children);
        // Clone each logo and append it to the track
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });
    }

});