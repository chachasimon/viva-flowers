// Loader: Hide after page load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }, 1000);
    }
});

// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

// Dark/Light Mode Toggle
const themeToggle = () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');

        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem('viva-theme');
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        toggleBtn.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('viva-theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('viva-theme', 'dark');
            }
        });
    }
}

// Lightbox Functionality
const lightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightboxModal = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    if (lightboxModal) {
        galleryItems.forEach(image => {
            image.addEventListener('click', () => {
                lightboxModal.style.display = 'block';
                lightboxImg.src = image.src;
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        closeBtn.addEventListener('click', () => {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });

        window.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Smooth Scrolling for anchor links
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }

                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Simple Contact Form Handling
const contactForm = () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value;
            alert(`Thank you, ${name}! Your message has been sent. Viva Flowers and Decor will contact you shortly.`);
            form.reset();
        });
    }
}

// Scroll Entrance Animations (Fade Up)
const scrollAnimation = () => {
    const elements = document.querySelectorAll('.service-card, .about-text, .about-image, .section-title, .subsection-title, .testimonial-card, .contact-info, .contact-form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    themeToggle();
    lightbox();
    smoothScroll();
    contactForm();
    scrollAnimation();
});
