// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '1rem';
toggleButton.style.left = '1rem';
toggleButton.style.padding = '0.5rem 1rem';
toggleButton.style.background = '#3700b3';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode styles
const darkModeStyles = document.createElement('style');
darkModeStyles.innerHTML = `
    body.dark-mode {
        background: #121212;
        color: #f4f4f9;
    }
    nav {
        background: #1e1e1e;
    }
    nav a {
        color: #fff;
    }
    nav a:hover {
        color: #ffd700;
    }
    ul li {
        background: #1e1e1e;
        color: #f4f4f9;
        border-color: #333;
    }
`;
document.head.appendChild(darkModeStyles);

// Create "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '2rem';
backToTopButton.style.right = '2rem';
backToTopButton.style.padding = '0.5rem 1rem';
backToTopButton.style.background = '#3700b3';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Hidden initially
document.body.appendChild(backToTopButton);

// Show "Back to Top" button when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when "Back to Top" button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Select all sections
const sections = document.querySelectorAll('section');

// Function to add the 'visible' class to sections within the viewport
const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // Check if the section is in the viewport
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};

// Run fadeInOnScroll on page load and scroll
document.addEventListener("DOMContentLoaded", fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);


// Add scroll event listener to trigger fade-in
window.addEventListener('scroll', fadeInOnScroll);


// Typing animation for header text
const text = "Welcome to Shawn Burroughs' Portfolio";
let index = 0;

const typeEffect = () => {
    const target = document.getElementById('animated-text');
    if (index < text.length) {
        target.innerHTML += text[index];
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed
    }
};

typeEffect(); // Start typing effect


console.log("Section is now visible:", section);
