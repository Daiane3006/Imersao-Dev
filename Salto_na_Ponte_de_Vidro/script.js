rodada = 1

while(rodada <= 3) {
    escolhaJogador = prompt("Nível " + rodada + ", escolha um vidro 1, 2 ou 3!")
    pisoQuebrado = Math.floor(Math.random()*3) + 1

    if (escolhaJogador == pisoQuebrado) {
        alert("Opss, o vidro quebrou! Acabou o jogo para você.")
        rodada = 1000
    } else {
        alert("Ufaa! Você passou, o piso quebrado estava na ponte: " + pisoQuebrado)
    }

    rodada = rodada + 1
}

if (rodada == 4) {
    alert("Parabéns!! Você venceu!")
}