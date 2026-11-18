
const opinions = [
    {
        text: "As opiniões dos nossos membros aparecerão aqui!",
        author: "Membro do Verade PT"
    }
];

let currentOpinion = 0;
let isPaused = false;

const opinionText = document.getElementById("opinionText");
const opinionAuthor = document.getElementById("opinionAuthor");
const opinionNumber = document.getElementById("opinionNumber");
const opinionCounter = document.getElementById("opinionCounter");

function showOpinion() {
    opinionText.textContent = opinions[currentOpinion].text;
    opinionAuthor.textContent = opinions[currentOpinion].author;
    opinionNumber.textContent = "Opinião " + (currentOpinion + 1);
    opinionCounter.textContent =
        (currentOpinion + 1) + " / " + opinions.length;
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
