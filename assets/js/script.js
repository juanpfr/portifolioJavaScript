// exercício 1

function enviarResposta(){
    let resposta = Number(document.getElementById("adivinhar").value)

    if(resposta === 3){
        alert("Acertou legal!")
    }else{
        alert("Errou, parceiro!")
    }

    document.getElementById("adivinhar").value = ""
}

document.getElementById("adivinhar").addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada é o Enter (código 13)
    if (event.key === "Enter") {
        enviarResposta(); // Chama a função quando Enter é pressionado
    }
});