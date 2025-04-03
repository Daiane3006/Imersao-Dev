// preciso criar uma lista com os 3 jogadores 
personagem = [" ", " ", " "]

viloes = [" ", " ", " "]

forcaPersonagem = 0
forcaViloes = 0

// alert("o array personagem contem: " + personagem)
for (let i=0; i<3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1))
    personagem[i] = escolhaPersonagem
    // calcular a força de cada jogador, e depois somar para saber a força do time
    forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
    // forcaPersonagem += Math.floor(Math.random() * 10) + 1 Maneira mais avançada
    
}

for (let i=0; i<3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 5)
    viloesPossiveis = ["Nazare", "Odete", "Flora", "Carminha", "Laura"]
    viloes[i] = viloesPossiveis[indiceAleatorio]
    // calcular a força de cada jogador do time do computador
    forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}

// comparar os dois times para saber quem venceu
if (forcaPersonagem > forcaViloes) {
    alert("Seu time é forte, vocês ganharam, sua forca foi " + forcaPersonagem)
} else {
    if (forcaPersonagem < forcaViloes) {
        alert("Seu time perdeu, o computador ganhou o cabo de guerra com a forca de: " + forcaViloes)
    } else {
        alert("Os dois times tem a mesma força! Vocês empataram!")
    }
}