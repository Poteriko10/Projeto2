document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores dos campos de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se ambos os campos estão preenchidos
    if (username && password) {
        // Se os campos estiverem preenchidos, redireciona para o site
        window.location.href = "https://loja.lufer.com.br/";
    } else {
        // Caso algum campo esteja vazio, exibe uma mensagem de alerta
        alert("Por favor, preencha todos os campos.");
    }
});