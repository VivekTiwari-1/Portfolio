// ========================== Toggle icon navbar ==========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ========================== Scroll section active link ==========================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    // ========================== Remove toggle icon and navbar when click link (scroll)==========================

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// ========================== Scroll reveal ==========================
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .skill-head', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .tech-skill', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .prof-skills, .contactH', { origin: 'right' });

// ========================== typed js ==========================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ========================== Skill radial (number counter) ==========================
var number1 = document.getElementById('number1')
var counter1 = 0;

setInterval(() => {
    if (counter1 == 80) {
        clearInterval;
    }
    else {
        counter1 += 1;
        number1.innerHTML = `${counter1}%`;
    }
}, 25);
var number2 = document.getElementById('number2')
var counter2 = 0;

setInterval(() => {
    if (counter2 == 85) {
        clearInterval;
    }
    else {
        counter2 += 1;
        number2.innerHTML = `${counter2}%`;
    }
}, 30);

var number3 = document.getElementById('number3')
var counter3 = 0;
setInterval(() => {
    if (counter3 == 70) {
        clearInterval;
    }
    else {
        counter3 += 1;
        number3.innerHTML = `${counter3}%`;
    }
}, 30);

var number4 = document.getElementById('number4')
var counter4 = 0;
setInterval(() => {
    if (counter4 == 75) {
        clearInterval;
    }
    else {
        counter4 += 1;
        number4.innerHTML = `${counter4}%`;
    }
}, 30);