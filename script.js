document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-list');

    if (!menu || !menuLinks) return;

    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    menuLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuLinks.classList.remove('active');
        });
    });
});