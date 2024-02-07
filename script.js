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


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

for(const item of perguntas){
    // para chamar cada item de perguntas eu devo chamar primeiro item
    
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for (let resposta of item.respostas ) {
        
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        // muda o atributo desejado, aqui name : pergunta- + o indice de cada pergunta dentro de perguntas
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        // deleta e repõe a informação desejada
        dt.querySelector('input').onchange = (event) => {
            // deleta
            corretas.delete(item)
            // verifica se o valor da pergunta corresponde ao valor correto
            if(event.target.value == item.correta){
                
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        
        quizItem.querySelector('dl').appendChild(dt)
    }
    


    quizItem.querySelector('dt').remove()


    // coloca as perguntas na tela
    quiz.appendChild(quizItem)
}
