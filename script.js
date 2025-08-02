function login() {
    // Simple prototype logic: always redirect to categories page
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    if (!email || !senha) {
        alert('Por favor, preencha Email e Senha.');
        return;
    }
    // Redirect to categories page
    window.location.href = 'categories.html';
}