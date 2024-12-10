// Adivinhador de número (1 a 10)

function enviarResposta() {
    let resposta = Number(document.getElementById("adivinhar").value)

    if (resposta === 3) {
        document.querySelector("p").innerText = "Acertou legal!"
    } else {
        document.querySelector("p").innerText = "Errou, parceiro!"
    }

    document.getElementById("adivinhar").value = ""
}

// Verificador de ano bissexto

function verificarAnoBissexto() {
    let resposta = document.getElementById("verificarAnoBissexto").value
    let parte = Number(resposta.slice(2, 4))

    if (parte % 4 == 0) {
        document.querySelector("p").innerText = "Este ano é bissexto!"
    } else {
        document.querySelector("p").innerText = "Este ano não é bissexto!"
    }
    document.getElementById("verificarAnoBissexto").value = ""
}

// Validação de senha

function validadorSenha() {
    let resposta = document.getElementById("validadorSenha").value
    if (resposta.length < 8) {
        document.querySelector("p").innerText = "Esta senha não é válida, a senha deve ter \nno mínimo 8 caracteres!"
    } else {
        document.querySelector("p").innerText = "Senha válida!"
    }
}

// Filtrar lista de alimentos

function filtrarListaAlimentos() {
    let alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];

    let ingredientes = alimentos.filter(item => item === "Feijão" || item === "Batata");

    document.querySelector("p").innerText = "Ingredientes necessários:" + ingredientes
}