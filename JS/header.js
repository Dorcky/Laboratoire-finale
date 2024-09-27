// JS/loadHeader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Appeler la fonction pour initialiser le menu hamburger après le chargement du header
            initHamburgerMenu();
        })
        .catch(error => console.error('Erreur lors du chargement du header:', error));
});

function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
}