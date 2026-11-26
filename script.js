
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

   
else if (evento === "setembro12") {
    detalhes.innerHTML = `
        <h3>🤝 Encontrinho do Verade PT</h3>
        <p>📅 12 de setembro de 2026 às 10:00 da manhã</p>
        <p>📍 Avenida Almada Gago Coutinho, Lisboa</p>

        <a href="https://www.tiktok.com/@veradept.ofc/photo/7682839338173943072?is_from_webapp=1&sender_device=pc&web_id=7708715787724621344"
           target="_blank"
           rel="noopener noreferrer">
            Mais informações ↗
        </a>
    `;
}
    
else if (evento === "outubro25") {
    detalhes.innerHTML = `
        <h3>🤝 Encontrinho do Verade PT</h3>
        <p>📅 25 de outubro de 2026 às 10:00 da manhã</p>
        <p>📍 Jardim da Rua do Capitão Leitão, Vila Nova de Gaia, Porto, Portugal</p>

        <a href="https://www.tiktok.com/@veradept.ofc/photo/7694738715205291296?is_from_webapp=1&sender_device=pc&web_id=7708715787724621344"
           target="_blank"
           rel="noopener noreferrer">
            Mais informações ↗
        </a>
    `;
}

else if (evento === "novembro7") {
    detalhes.innerHTML = `
        <h3>🤝 Encontrinho do Verade PT</h3>
        <p>📅 7 de novembro de 2026 às 10:00 da manhã</p>
        <p>📍 Jardim de Santo António dos Cavaleiros, Lisboa, Portugal</p>

        <a href="https://www.tiktok.com/@veradept.ofc/photo/7702537813413137697?is_from_webapp=1&sender_device=pc&web_id=7708715787724621344"
           target="_blank"
           rel="noopener noreferrer">
            Mais informações ↗
        </a>
    `;
}

else if (evento === "novembro14") {
    detalhes.innerHTML = `
        <h3>🤝🎤 Encontrinhos + Shows do Verade PT</h3>
        <p>📅 14 de novembro de 2026</p>
        <p>🤝 1.º Encontrinho: 12:30</p>
        <p>🎤 1.º Show: 15:00</p>
        <p>🤝 2.º Encontrinho: 15:30</p>
        <p>🎤 2.º Show: 18:30</p>
        <p>📍 Exponor, Porto, Portugal</p>
        <a href="https://www.tiktok.com/@veradept.ofc/photo/7705518055761169696?is_from_webapp=1&sender_device=pc&web_id=7708715787724621344"
   target="_blank"
   rel="noopener noreferrer">
    Mais informações ↗
</a>
    `;
}

else if (evento === "novembro15") {
    detalhes.innerHTML = `
        <h3>🤝🎤 Encontrinho + Show do Verade PT</h3>
        <p>📅 15 de novembro de 2026</p>
        <p>🤝 Encontrinho: 12:30</p>
        <p>🎤 Show: 15:00</p>
        <p>📍 Coliseu dos Recreios, Lisboa, Portugal</p>
        <a href="https://www.tiktok.com/@veradept.ofc/photo/7705518055761169696?is_from_webapp=1&sender_device=pc&web_id=7708715787724621344"
   target="_blank"
   rel="noopener noreferrer">
    Mais informações ↗
</a>
        `;
}
}

/* CARROSSEL DE FANARTS - VERADE PT */

const listaFanarts = [
    {
        imagem: "fanarts/fanart1.png",
        artista: "@Artista1",
        personagem: "Torajo"
    },
    {
        imagem: "fanarts/fanart2.png",
        artista: "@Artista2",
        personagem: "Morajo"
    },
    {
        imagem: "fanarts/fanart3.png",
        artista: "@Artista3",
        personagem: "Zulmi"
    }
];

let indiceFanart = 0;
let fanartsPausado = false;

function mostrarFanart() {

    const fanart = listaFanarts[indiceFanart];

    document.getElementById("fanartImagem").src = fanart.imagem;
    document.getElementById("fanartArtista").textContent = fanart.artista;
    document.getElementById("fanartPersonagem").textContent =
        "Personagem: " + fanart.personagem;

    document.getElementById("fanartContador").textContent =
        (indiceFanart + 1) + " / " + listaFanarts.length;
}

function proximaFanart() {
    indiceFanart++;

    if (indiceFanart >= listaFanarts.length) {
        indiceFanart = 0;
    }

    mostrarFanart();
}

function anteriorFanart() {
    indiceFanart--;

    if (indiceFanart < 0) {
        indiceFanart = listaFanarts.length - 1;
    }

    mostrarFanart();
}

function pausarFanarts() {

    fanartsPausado = !fanartsPausado;

    const botao = document.getElementById("pausarFanarts");

    if (fanartsPausado) {
        clearInterval(intervaloFanarts);
        botao.textContent = "▶️ Retomar";
    } else {
        iniciarCarrossel();
        botao.textContent = "⏸️ Pausar";
    }
}

let intervaloFanarts;

function iniciarCarrossel() {
    clearInterval(intervaloFanarts);

    intervaloFanarts = setInterval(function() {
        proximaFanart();
    }, 5000);
}

// Inicialização
mostrarFanart();
iniciarCarrossel();

{
    imagem: "imagens/desenhos/Fanart1.jpeg",
    artista: "Bea ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ",
    personagem: "Azedo (versão mulher)"
},
