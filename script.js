// script.js

// Toggle mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form data as needed
    console.log('Form submitted:', Object.fromEntries(formData));
    // You can add further logic here to send data to a server
});
