const hamburgerWrapper = document.getElementById('hamburger-wrapper');
const hamburgerNavWrapper = document.getElementById('hamburger-nav-wrapper');
const closeBtn = document.querySelector('.close-btn');

hamburgerWrapper.addEventListener('click', () => {
    hamburgerWrapper.classList.toggle('active');
    hamburgerNavWrapper.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    hamburgerWrapper.classList.remove('active');
    hamburgerNavWrapper.classList.remove('active');
});

const mobileLinks = document.querySelectorAll('#hamburger-nav-wrapper a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerWrapper.classList.remove('active');
        hamburgerNavWrapper.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburgerWrapper.contains(e.target) && !hamburgerNavWrapper.contains(e.target)) {
        hamburgerWrapper.classList.remove('active');
        hamburgerNavWrapper.classList.remove('active');
    }
});

// function
