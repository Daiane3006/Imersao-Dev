idade = prompt("Quantos aons você tem?")

if (idade >= 18) {
    alert("Você pode jogar!")
} else {
    alert("Você não tem idade para jogar!")
}

if (idade >= 18) {
    escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura")
    escolhaComputador = Math.floor(Math.random() * 3) + 1
    
    if (escolhaJogador == escolhaComputador) {
        // jogador PEDRA, Computador PEDRA --> empate
        // jogador TESOURA, Computador TESOURA --> empate
        // jogador PAPEL, Computador PAPEL --> empate
        alert("Empate!!")
    }

    
    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            // jogador PEDRA, Computador PAPEL --> computador vence
            alert("Computador venceu, a escolha foi papel")
        }
        if (escolhaComputador == 3) {
            // jogador PEDRA, Computador TESOURA --> jogador vence
            alert("Jogador vence, computador escolheu tesoura")
        }
    }

    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            // jogador PAPEL, Computador PEDRA --> jogador vence
            alert("Jogador vence, computador escolheu pedra")
        }
        if (escolhaComputador == 3) {
            // jogador PAPEL, Computador TESOURA --> computador vence
            alert("Computador venceu, a escolha foi tesoura")
        }
    }

    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            // jogador TESOURA, Computador PEDRA --> computador vence
            alert("Computador venceu, a escolha foi pedra")
        }
        if (escolhaComputador == 2) {
            // jogador TESOURA, Computador PAPEL --> jogador vence
            alert("Jogador vence, computador escolheu papel")
        }
    }

    // alert("Escolha do computador foi " + escolhaComputador)
}