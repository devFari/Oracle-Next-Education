// Seleciona todos os <h2> com a classe "tituloRedirecionar"
document.querySelectorAll(".tituloRedirecionar").forEach(titulo => {
    titulo.addEventListener("click", function() {
        // Obtém a URL do atributo data-url
        const url = this.getAttribute("data-url");
        if (url) {
            window.location.href = url; // Redireciona para a URL especificada
        }
    });
});
