// loadFooter.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/footer.html')  // Notez le chemin modifié ici
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du footer:', error));
});