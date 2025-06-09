function learnMore() {
    alert("Redirecting to Learn More...");
    // window.location.href = "/learn-more.html";
}

function supportWork() {
    alert("Redirecting to Support Our Work...");
    // window.location.href = "/support.html";
}

//nav bar for the mobile device 
// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//about-----
const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach((el) => observers.observe(el));

// Optional: Animate cards on scroll
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});


const counters = document.querySelectorAll(".count");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = Math.ceil(target / 100);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
            observer.unobserve(counter);
        }
    });
}, {
    threshold: 0.6,
});

counters.forEach(counter => observer.observe(counter));


// Fill animation for bar elements
document.querySelectorAll('.bar-fill').forEach(bar => {
    const width = bar.style.getPropertyValue('--fill');
    bar.style.width = width;
});

// Amount button click sets value to input
document.querySelectorAll('.amounts button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText.replace('$', '');
        if (!isNaN(value)) {
            document.getElementById('custom').value = value;
        }
    });
});


// Animate donation bar fill
document.querySelectorAll('.bar-fill').forEach(bar => {
    const width = bar.style.getPropertyValue('--fill');
    bar.style.width = width;
});

// Amount button click sets value to input
document.querySelectorAll('.amounts button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText.replace('$', '');
        if (!isNaN(value)) {
            document.getElementById('custom').value = value;
        }
    });
});



//Contact Form
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Form elements animation on scroll
    const animateFormElements = function () {
        const formElements = document.querySelectorAll('.form-group, .checkbox-group, .btn');
        const windowHeight = window.innerHeight;

        formElements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const animationOffset = windowHeight / 1.3;

            if (elementPosition < animationOffset) {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 100);
            }
        });
    };

    // Initialize animations
    window.addEventListener('scroll', animateFormElements);
    animateFormElements(); // Run once on load

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    contactForm.appendChild(successMessage);

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset previous error states
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        document.querySelectorAll('.error-message').forEach(el => el.remove());

        let isValid = true;

        // Validate first name
        const firstName = document.getElementById('firstName');
        if (!firstName.value.trim()) {
            showError(firstName, 'First name is required');
            isValid = false;
        }

        // Validate last name
        const lastName = document.getElementById('lastName');
        if (!lastName.value.trim()) {
            showError(lastName, 'Last name is required');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email');
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Validate subject
        const subject = document.getElementById('subject');
        if (!subject.value) {
            showError(subject, 'Please select a subject');
            isValid = false;
        }

        // Validate message
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // Form is valid - process submission
            processFormSubmission();
        }
    });

    function showError(input, message) {
        input.classList.add('error');
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        input.parentNode.insertBefore(errorMessage, input.nextSibling);

        // Animate error
        input.style.animation = 'shake 0.5s';
        input.addEventListener('animationend', () => {
            input.style.animation = '';
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function processFormSubmission() {
        // Here you would typically send data to a server
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };

        console.log('Form submitted:', formData);

        // Show success message
        successMessage.style.display = 'block';
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }

    // Add shake animation for errors
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});

//news letter
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    // Validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Form submission handler
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset previous error states
        emailError.style.display = 'none';
        emailInput.style.borderColor = '#ddd';

        // Validate email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email address is required';
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#e74c3c';
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#e74c3c';
            return;
        }

        // Simulate form submission (replace with actual AJAX call)
        console.log('Subscribing email:', emailInput.value);

        // Show success message
        successMessage.style.display = 'block';
        newsletterForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });

    // Add animation to form elements
    const formElements = document.querySelectorAll('.form-group, .subscribe-btn');
    formElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
});

//drop-down nav-links
document.addEventListener('DOMContentLoaded', function () {
    const toggleLink = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown');

    toggleLink.addEventListener('click', function (e) {
        // Prevent immediate navigation on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        }
    });
});


//slider home page
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = slides.length;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Trigger animations
    const animatedElements = slides[index].querySelectorAll('.animated');
    animatedElements.forEach(element => {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    });
}

// Function to go to next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

// Function to go to previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

// Function to change slide by direction
function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
    resetInterval();
}

// Function to go to specific slide
function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetInterval();
}

// Function to start auto-slide
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Function to reset interval
function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Keyboard navigation
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - go to next slide
            changeSlide(1);
        } else {
            // Swiped right - go to previous slide
            changeSlide(-1);
        }
    }
}

// Pause auto-slide on hover
const carousel = document.querySelector('.header-carousel');
carousel.addEventListener('mouseenter', function () {
    clearInterval(slideInterval);
});

carousel.addEventListener('mouseleave', function () {
    startSlideShow();
});

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', function () {
    showSlide(0);
    startSlideShow();
});

// Handle visibility change (pause when tab is not active)
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        clearInterval(slideInterval);
    } else {
        startSlideShow();
    }
});