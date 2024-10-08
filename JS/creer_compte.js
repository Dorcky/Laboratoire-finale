document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupération des valeurs du formulaire
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const telephone = document.getElementById('telephone').value;
    const codePostal = document.getElementById('code-postal').value;
    const adresse = document.getElementById('adresse').value;

    // Validation simple : vérifier si le mot de passe et sa confirmation sont identiques
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    // Création d'un objet utilisateur
    const user = {
        prenom: prenom,
        nom: nom,
        email: email,
        password: password,
        telephone: telephone,
        codePostal: codePostal,
        adresse: adresse
    };

    // Récupère les utilisateurs existants ou initialise un tableau vide si aucun utilisateur
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // On vérifie si l'utilisateur existe déjà
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        alert('Un compte avec cet email existe déjà.');
        return;
    }

    // On ajoute l'utilisateur au tableau des utilisateurs
    users.push(user);

    // On enregistre dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirection vers la page de connexion après l'enregistrement
    alert('Compte créé avec succès. Vous pouvez maintenant vous connecter.');
    window.location.href = 'connexion.html';
});
