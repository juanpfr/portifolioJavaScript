// exercício 1

function enviarResposta(){
    let resposta = Number(document.getElementById("adivinhar").value)

    if(resposta === 3){
        alert("acertou mizeravi")
    }else{
        alert("errou pai")
    }
}

/* function enviarResposta() {
    let input = document.getElementById("adivinhar");
    let resposta = Number(input.value);

    if (resposta === 3) {
        alert("Acertou legal!");
    } else {
        alert("Errou, parceiro!");
    }

    // Limpa o campo de entrada
    input.value = "";

    // Recarrega a página após 1 segundo
    setTimeout(() => {
        location.reload();
    }, 1000);
} */