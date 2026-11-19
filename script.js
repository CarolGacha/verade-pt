
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
        text: "INCRÍVEL PARA CARAÇAS! Uma das melhores comunidades que já entrei",
        author: "ˑ 𖥻 ִᨮׁׅ֮Yυׁׅ ꩇixׁׅ ּ ! 🍥"
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

// CALENDÁRIO DE EVENTOS

const calendarioDias = document.getElementById("calendarioDias");

if (calendarioDias) {

    let dataAtual = new Date(2026, 10, 1);

    const eventos = {
        // Exemplo:
        // "2026-11-21": [
        //     { tipo: "encontrinho", nome: "Encontrinho do Verade PT" }
        // ],
        // "2026-11-28": [
        //     { tipo: "show", nome: "Show de Mundo Torajo" }
        // ]
    };

    function criarCalendario() {
        const ano = dataAtual.getFullYear();
        const mes = dataAtual.getMonth();

        const nomeMes = dataAtual.toLocaleDateString("pt-PT", {
            month: "long",
            year: "numeric"
        });

        document.getElementById("mesAno").textContent =
            nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1);

        calendarioDias.innerHTML = "";

        const diasSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

        diasSemana.forEach(dia => {
            const elemento = document.createElement("div");
            elemento.className = "dia-calendario semana";
            elemento.textContent = dia;
            calendarioDias.appendChild(elemento);
        });

        const primeiroDia = new Date(ano, mes, 1);
        const totalDias = new Date(ano, mes + 1, 0).getDate();

        const espacosVazios = (primeiroDia.getDay() + 6) % 7;

        for (let i = 0; i < espacosVazios; i++) {
            calendarioDias.appendChild(document.createElement("div"));
        }

        for (let dia = 1; dia <= totalDias; dia++) {
            const elemento = document.createElement("div");
            elemento.className = "dia-calendario";

            const data = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

            const botao = document.createElement("button");
            botao.textContent = dia;

            const eventosDoDia = eventos[data] || [];

            if (eventosDoDia.length > 0) {
                const simbolos = document.createElement("div");
                simbolos.textContent = eventosDoDia.map(evento =>
                    evento.tipo === "encontrinho" ? "🤝" : "🎤"
                ).join(" ");
                elemento.appendChild(simbolos);
            }

            botao.addEventListener("click", () => {
                document.querySelectorAll(".dia-calendario").forEach(el =>
                    el.classList.remove("selecionado")
                );

                elemento.classList.add("selecionado");

                const detalhes = document.getElementById("detalhesEvento");

                if (eventosDoDia.length > 0) {
                    detalhes.innerHTML = eventosDoDia.map(evento =>
                        `<p>${evento.tipo === "encontrinho" ? "🤝" : "🎤"} ${evento.nome}</p>`
                    ).join("");
                } else {
                    detalhes.innerHTML = `<p>Não existem eventos registados para ${dia}/${mes + 1}/${ano}.</p>`;
                }
            });

            elemento.appendChild(botao);
            calendarioDias.appendChild(elemento);
        }
    }

    document.getElementById("mesAnterior").addEventListener("click", () => {
        dataAtual.setMonth(dataAtual.getMonth() - 1);
        criarCalendario();
    });

    document.getElementById("mesSeguinte").addEventListener("click", () => {
        dataAtual.setMonth(dataAtual.getMonth() + 1);
        criarCalendario();
    });

    criarCalendario();
}
