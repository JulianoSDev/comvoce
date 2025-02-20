function responder(resposta) {
    let mensagem = document.getElementById("mensagem");
    let container = document.querySelector(".container");

    if (resposta === "sim") {
        mensagem.innerHTML = "Que bom fia! Fico feliz que saiba! 😊";
        setTimeout(() => mostrarFases(false), 2000);
    } else {
        mensagem.innerHTML = "Tudo bem! sua presença já me deixa feliz! Mas... ";
        setTimeout(() => mostrarFases(true), 2000);
    }
}

function mostrarFases(semVoce) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    if (semVoce) {
        container.innerHTML = `
            <h2>Meu dia sem você:</h2>
            <img src="sem_voce.jpg" alt="Meu dia sem você" class="imagem">
            <button onclick="mostrarComVoce()" class="botao">Próxima fase</button>
        `;
    } else {
        mostrarComVoce();
    }
}

function mostrarComVoce() {
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h2>Meu dia com você:</h2>
        <img src="com_voce.jpg" alt="Meu dia com você" class="imagem">
        <button onclick="mostrarUltimaFase()" class="botao">Próxima fase</button>
    `;
}

function mostrarUltimaFase() {
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h2>Eu te amo</h2>
        <p>para sempre, lindona 💖</p>
    `;
}
