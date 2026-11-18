
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
        text: "Eu estou da Verade PT desde do seu lançamento, quando perguntavam nos comentários quem queria entrar, eu entrei e não me arrependo. Uma comunidade super bonita podendo fazer até amizade com as pessoas e conhecendo elas na vida real nos encontrinhos (Como aconteceu no show), agradeço imenso às adms, de coração quentinho da Anny. QUE CRESÇA MAIS E MAIS A COMUNIDADE  !!",
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
        text: "Na minha opinião, é o melhor grupo que entrei pois finalmente n me sinto sozinha por gostar de mundo Torajo, além de adorar socializar, participar em projetos e me divertir com aqueles aurudos. Amo eles",
        author: "Carolaina🌸☕🍏"
    }
];


let currentOpinion = 0;
let isPaused = false;

const opinionText = document.getElementById("opinionText");
const opinionAuthor = document.getElementById("opinionAuthor");
const opinionNumber = document.getElementById("opinionNumber");
const opinionCounter = document.getElementById("opinionCounter");


function showOpinion() {
    const card = document.querySelector(".opinion-card");

    card.classList.add("changing");

    setTimeout(() => {
        opinionText.textContent = opinions[currentOpinion].text;
        opinionAuthor.textContent = opinions[currentOpinion].author;
        opinionNumber.textContent = "Opinião " + (currentOpinion + 1);
        opinionCounter.textContent =
            (currentOpinion + 1) + " / " + opinions.length;

        card.classList.remove("changing");
    }, 350);
}

document.getElementById("nextOpinion").addEventListener("click", () => {
    currentOpinion = (currentOpinion + 1) % opinions.length;
    showOpinion();
});

document.getElementById("prevOpinion").addEventListener("click", () => {
    currentOpinion =
        (currentOpinion - 1 + opinions.length) % opinions.length;
    showOpinion();
});

document.getElementById("pauseOpinions").addEventListener("click", () => {
    isPaused = !isPaused;

    document.getElementById("pauseOpinions").textContent =
        isPaused ? "▶ Continuar" : "⏸ Pausar";
});

setInterval(() => {
    if (!isPaused) {
        currentOpinion = (currentOpinion + 1) % opinions.length;
        showOpinion();
    }
}, 5000);

showOpinion();
