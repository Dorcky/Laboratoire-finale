document.addEventListener('DOMContentLoaded', () => {
    console.log('Document chargé');

    const users = [
        { firstName: 'Admin', lastName: 'User', username: 'admin@example.com', password: 'admin' }
    ];

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Formulaire soumis');

            const email = document.getElementById('email').value.toLowerCase();
            const password = document.getElementById('password').value;

            const user = users.find(u => u.username === email && u.password === password);
            console.log(`Tentative de connexion avec: ${email}`);

            if (user) {
                console.log(`Connexion réussie pour: ${user.username}`);
                sessionStorage.setItem('loggedIn', 'true');

                activateNavLinks();
                activateButtons();

                window.location.href = 'index.html';
            } else {
                console.log('Email ou mot de passe incorrect.');
                alert('Email ou mot de passe incorrect.');
            }
        });
    }

    const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
    console.log(`État de connexion: ${isLoggedIn}`);
    if (isLoggedIn) {
        activateNavLinks();
        activateButtons();
    } else {
        disableButtons();
    }

    function activateNavLinks() {
        console.log('Activation des liens de navigation');
        const navLinks = document.querySelectorAll('.nav a.disabled');
        if (navLinks.length === 0) {
            console.log('Aucun lien désactivé trouvé pour activation.');
        }
        navLinks.forEach(link => {
            console.log(`Activation du lien: ${link.innerText}`);
            link.classList.remove('disabled');
            link.style.color = ''; // Réinitialise la couleur par défaut
            link.style.pointerEvents = 'auto'; // Réactive les événements
            link.style.cursor = 'pointer'; // Réactive le curseur
        });
    }

    function activateButtons() {
        console.log('Activation des boutons');
        const buttons = document.querySelectorAll('.catalogue-button, .action-button, .specials-button');
        if (buttons.length === 0) {
            console.log('Aucun bouton trouvé pour activation.');
        }
        buttons.forEach(button => {
            console.log(`Activation du bouton: ${button.innerText}`);
            button.classList.remove('disabled');
            button.style.cursor = 'pointer';
            button.style.pointerEvents = 'auto';
        });
    }

    function disableButtons() {
        console.log('Désactivation des boutons');
        const buttons = document.querySelectorAll('.catalogue-button, .action-button, .specials-button');
        buttons.forEach(button => {
            console.log(`Désactivation du bouton: ${button.innerText}`);
            button.classList.add('disabled');
            button.style.cursor = 'not-allowed';
            button.style.pointerEvents = 'none';
        });
    }

    // Désactiver les liens de navigation au chargement
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.classList.add('disabled'); // Ajoute la classe disabled
        console.log(`Lien désactivé: ${link.innerText}`);
    });
});
