document.addEventListener('DOMContentLoaded', () => {
    console.log('Document chargé');

    // On récupère les utilisateurs du localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // On ajoute le compte admin par défaut
    const admin = { email: 'admin@example.com', password: 'admin' };
    if (!users.some(u => u.email === admin.email)) {
        users.push(admin); // On ajoute l'admin s'il n'est pas déjà présent
        localStorage.setItem('users', JSON.stringify(users));
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Formulaire soumis');

            const email = document.getElementById('email').value.toLowerCase();
            const password = document.getElementById('password').value;

            // On cherche un utilisateur avec l'email et le mot de passe fournis
            const user = users.find(u => u.email === email && u.password === password);
            console.log(`Tentative de connexion avec: ${email}`);

            if (user) {
                console.log(`Connexion réussie pour: ${user.email}`);
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('user', JSON.stringify(user));

                activateNavLinks();
                activateButtons();

                window.location.href = 'index.html';
            } else {
                console.log('Email ou mot de passe incorrect.');
                alert('Email ou mot de passe incorrect.');
            }
        });
    }

    // Vérifie si l'utilisateur est déjà connecté
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
});
