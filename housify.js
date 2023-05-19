const header = document.querySelector('#header');
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('header_scrolled')
    } else if (window.scrollY <= 50) {
        header.classList.remove('header_scrolled')}
});

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
if (close) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
