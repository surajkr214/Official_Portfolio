/* --- 1. THEME TOGGLE LOGIC --- */
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

themeBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeBtn.classList.replace('fa-moon', 'fa-sun');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeBtn.classList.replace('fa-sun', 'fa-moon');
    }
});

/* --- 2. MOBILE MENU TOGGLE --- */
const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        // Dark theme background for mobile menu
        navLinks.style.backgroundColor = 'rgba(11, 13, 23, 0.95)';
        navLinks.style.width = '100%';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid var(--primary)';
        navLinks.style.zIndex = '999';
    }
});

/* --- 3. SMOOTH SCROLLING --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu on click
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});