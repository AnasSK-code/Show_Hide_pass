// Fonction pour afficher ou masquer le mot de passe
function togglePassword() {
    let passwordField = document.getElementById('password');
    let passIcon = document.getElementById('pass-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passIcon.src = 'image/show.png'; // Assurez-vous que cette image existe
    } else {
        passwordField.type = 'password';
        passIcon.src = 'image/hide.png'; // Assurez-vous que cette image existe
    }
}
