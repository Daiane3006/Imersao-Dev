// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      "pergunta": "Qual a unidade básica da vida?",
      "respostas": [
        { "opcao": "A célula", "correto": true },
        { "opcao": "O átomo", "correto": false },
        { "opcao": "A molécula", "correto": false }
      ]
    },
    {
      "pergunta": "Qual a lei da termodinâmica que afirma que a entropia de um sistema isolado tende a aumentar ao longo do tempo?",
      "respostas": [
          { "opcao": "Primeira Lei da Termodinâmica", "correto": false },
          { "opcao": "Segunda Lei da Termodinâmica", "correto": true },
        { "opcao": "Terceira Lei da Termodinâmica", "correto": false }
      ]
    },
    {
      "pergunta": "Qual o nome do processo em que a água passa do estado líquido para o estado gasoso?",
      "respostas": [
        { "opcao": "Evaporação", "correto": true },
        { "opcao": "Condensação", "correto": false },
        { "opcao": "Solidificação", "correto": false }
      ]
    },
    {
      "pergunta": "Qual a principal função das mitocôndrias nas células eucarióticas?",
      "respostas": [
          { "opcao": "Síntese de proteínas", "correto": false },
          { "opcao": "Armazenamento de material genético", "correto": false },
          { "opcao": "Produção de energia (ATP)", "correto": true }
      ]
    },
    {
      "pergunta": "O que são ondas eletromagnéticas?",
      "respostas": [
          { "opcao": "Vibrações mecânicas que se propagam através de um meio", "correto": false },
          { "opcao": "Perturbações que se propagam no espaço transportando energia, sem necessitar de um meio material", "correto": true },
        { "opcao": "Correntes de elétrons fluindo em um condutor", "correto": false }
      ]
    },
    {
      "pergunta": "Qual a teoria que explica a origem do Universo a partir de uma grande explosão?",
      "respostas": [
          { "opcao": "Teoria da Relatividade", "correto": false },
          { "opcao": "Teoria da Evolução", "correto": false },
          { "opcao": "Teoria do Big Bang", "correto": true }
      ]
    }
  ]

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos = acertos + 1;
                acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
