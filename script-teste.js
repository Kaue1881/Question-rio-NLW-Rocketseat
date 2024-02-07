
// minha estrutura de código
const perguntas = [
    {
        pergunta: "Qual é o maior planeta do nosso sistema solar?",
        respostas: [
            "Júpiter",
            "Vênus",
            "Marte",
        ],
        correta: 0
    },
    {
        pergunta: "Quem escreveu 'Romeu e Julieta'?",
        respostas: [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o símbolo químico para o ouro?",
        respostas: [
            "Ag",
            "Au",
            "Fe",
        ],
        correta: 1
    },
    {
        pergunta: "Em que ano foi fundada a Microsoft?",
        respostas: [
            "1980",
            "1975",
            "1985",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o maior oceano do mundo?",
        respostas: [
            "Oceano Atlântico",
            "Oceano Índico",
            "Oceano Pacífico",
        ],
        correta: 2
    },
    {
        pergunta: "Quem pintou a 'Mona Lisa'?",
        respostas: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        respostas: [
            "Toronto",
            "Montreal",
            "Ottawa",
        ],
        correta: 2
    },
    {
        pergunta: "Quantos lados tem um heptágono?",
        respostas: [
            "Sete",
            "Seis",
            "Oito",
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        respostas: [
            "Thomas Jefferson",
            "George Washington",
            "Abraham Lincoln",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o segundo maior planeta do nosso sistema solar?",
        respostas: [
            "Vênus",
            "Saturno",
            "Urano",
        ],
        correta: 1
    },
];



// document serve para eu modelar meu html em js
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// loop ou laço de repetição
//geralmente usado para itens do array

// - para item de perguntas -
for(const item of perguntas){
    // puxar dentro do laço: item / perguntas

    // quiz item = conteudo de template clonado (sessão de perguntas)
    const quizItem = template.content.cloneNode(true)
    // mudar o conteudo de cada h3 em quizItem para item.pergunta (conteudo = pergunta)
    quizItem.querySelector('h3').textContent = item.pergunta

    // repetição das respostas
    // para cada resposta de item.respostas (resposta)
    for(let resposta of item.respostas){
        // dt esta recebendo p conteudo de dt dentro da dl que está no template (template = quizitem, dt = ('dl dt'))
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        // muda o conteudo de span dentro de dt para resposta de item.respostas
        dt.querySelector('span').textContent = resposta

        // coloca a resposta na tela
        quizItem.querySelector('dl').appendChild(dt)
    }
    // remover a primeira resposta
    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)

}

//basicamente temos uma estrutura de código acima
// logo adiante temos que fazer que para cada item de pergunta, suas informações devem ser adicionadas


// minha estrutura de código