function logar() {
    // not very safe!
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('sucesso');
    } else {
        alert('acesso negado');
    }
}