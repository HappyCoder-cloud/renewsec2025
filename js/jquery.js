// Add shadow on header when scrolling
(() => {
const header = document.querySelector('.main-header');
function toggleShadow() {
header.classList.toggle('shadow-sm', window.scrollY > 10);
}
window.addEventListener('scroll', toggleShadow, { passive: true });
toggleShadow();
})();

// Smooth scroll and active menu highlight
(() => {
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link =>
link.addEventListener('click', e => {
const targetId = link.getAttribute('href');
if (targetId.startsWith('#') && document.querySelector(targetId)) {
e.preventDefault();
document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}));

const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
navLinks.forEach(link => link.classList.remove('active'));
if(entry.isIntersecting && entry.target.id){
const activeLink = document.querySelector(.navbar-nav .nav-link[href="#${entry.target.id}"]);
if(activeLink) activeLink.classList.add('active');
}
});
}, {rootMargin: '-50% 0px -50% 0px', threshold: 0});

sections.forEach(section => observer.observe(section));
})();

// Bootstrap carousel init handled by data attributes automatically