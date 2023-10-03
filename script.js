let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bxs-x-circle');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toogle('sticky', window.scrollY > 100);

    menu.classList.remove('bxs-x-circle');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset: true,
    distance: '50px',
    duration: 2000,
    delay: 500
});

ScrollReveal().reveal('.skills', {origin: 'bottom'})
ScrollReveal().reveal('.skill-heading, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content , home-content p, .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });