
/* OPINIÕES DO VERade PT */

const opinions = [
    {
        text: "Achei que é um grupo muito acolhedor e legais de conversar com as pessoas.",
        author: "lyn__ ★₊˚﹟🍓'"
    },
    {
        text: "Me sinto bem lá desde que entrei é muito confortável e socializa-se facimente tem algumas loucuras mas habituas-te com o tempo.",
        author: "•Emmanuel•"
    },
    {
        text: "Eu estou da Verade PT desde do seu lançamento, quando perguntavam nos comentários quem queria entrar, eu entrei e não me arrependo. Uma comunidade super bonita podendo fazer até amizade com as pessoas e conhecendo elas na vida real nos encontrinhos (Como aconteceu no show), agradeço imenso às adms, de coração quentinho da Anny. QUE CRESÇA MAIS E MAIS A COMUNIDADE !!",
        author: "ANNY👁️"
    },
    {
        text: "Eu gosto das pessoas, das amizades que fiz, gostarei das mesmas coisas. É isto, resumindo, eu amo o Verade PT",
        author: "Bea ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ"
    },
    {
        text: "Então acho que verade pt é uma comunidade incrível têm pessoas que nos ajudam quando é importante podemos falar sobre o que se passa com nós e as pessoas são muito simpáticas e amáveis",
        author: "David Anjos"
    },
    {
        text: "Para mim verade pt é uma comunidade muito acolhedora e que considero a melhor comunidade que já paricipei",
        author: "- ¶[Sarakichu]¶-"
    },
    {
        text: "INCRÍVEL PARA CARAÇAS! Uma das melhores comunidades que já entrei",
        author: "ˑ 𖥻 ִᨮׁׅ֮Yυׁׅ ꩇixׁׅ ּ ! 🍥"
    },
    {
        text: "Na minha opinião, é o melhor grupo que entrei pois finalmente n me sinto sozinha por gostar de mundo Torajo, além de adorar socializar, participar em projetos e me divertir com aqueles aurudos. Amo eles",
        author: "Carolaina🌸☕🍏"
    }
];

const opinionText = document.getElementById("opinionText");
const opinionAuthor = document.getElementById("opinionAuthor");
const opinionNumber = document.getElementById("opinionNumber");
const opinionCounter = document.getElementById("opinionCounter");
const opinionCard = document.querySelector(".opinion-card");

const nextOpinion = document.getElementById("nextOpinion");
const prevOpinion = document.getElementById("prevOpinion");
const pauseOpinions = document.getElementById("pauseOpinions");

if (
    opinionText &&
    opinionAuthor &&
    opinionNumber &&
    opinionCounter &&
    opinionCard &&
    nextOpinion &&
    prevOpinion &&
    pauseOpinions
) {
    let currentOpinion = 0;
    let isPaused = false;

    function showOpinion() {
        opinionText.textContent = opinions[currentOpinion].text;
        opinionAuthor.textContent = opinions[currentOpinion].author;
        opinionNumber.textContent = "Opinião " + (currentOpinion + 1);
        opinionCounter.textContent =
            (currentOpinion + 1) + " / " + opinions.length;
    }

    nextOpinion.addEventListener("click", () => {
        currentOpinion = (currentOpinion + 1) % opinions.length;
        showOpinion();
    });

    prevOpinion.addEventListener("click", () => {
        currentOpinion =
            (currentOpinion - 1 + opinions.length) % opinions.length;
        showOpinion();
    });

    pauseOpinions.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseOpinions.textContent =
            isPaused ? "▶ Continuar" : "⏸ Pausar";
    });

    setInterval(() => {
        if (!isPaused) {
            currentOpinion = (currentOpinion + 1) % opinions.length;
            showOpinion();
        }
    }, 5000);

    showOpinion();
}


/* CALENDÁRIO MANUAL DE EVENTOS */

const meses = [
    { id: "mesSetembro", nome: "Setembro 2026" },
    { id: "mesOutubro", nome: "Outubro 2026" },
    { id: "mesNovembro", nome: "Novembro 2026" },
    { id: "mesDezembro", nome: "Dezembro 2026" }
];

const tituloMes = document.getElementById("mesAno");
const botaoAnterior = document.getElementById("mesAnterior");
const botaoSeguinte = document.getElementById("mesSeguinte");

const blocosMeses = meses.map(mes => document.getElementById(mes.id));

if (
    tituloMes &&
    botaoAnterior &&
    botaoSeguinte &&
    blocosMeses.every(bloco => bloco !== null)
) {
    let mesAtual = 2;

    function mostrarMes() {
        blocosMeses.forEach((bloco, index) => {
            bloco.style.display =
                index === mesAtual ? "block" : "none";
        });

        tituloMes.textContent = meses[mesAtual].nome;
    }

    botaoAnterior.addEventListener("click", () => {
        if (mesAtual > 0) {
            mesAtual--;
            mostrarMes();
        }
    });

    botaoSeguinte.addEventListener("click", () => {
        if (mesAtual < meses.length - 1) {
            mesAtual++;
            mostrarMes();
        }
    });

    mostrarMes();
}
function mostrarEvento(evento) {

    const detalhes = document.getElementById("detalhesEvento");

    if (evento === "setembro2") {
        detalhes.innerHTML = `
            <h3>🤝 Encontrinho do Verade PT</h3>
            <p>📅 2 de setembro de 2026 às 10:00 da manhã</p>
            <p>📍 Porto, Portugal</p>
        `;
    }

}
