const PAPEL = "PAPEL"
const PIEDRA = "PIEDRA"
const TIJERA = "TIJERA"

const $ = el => document.querySelector(el)

const btnPiedra = $(".Piedra") 
const btnPapel = $(".Papel")
const btnTijera = $(".Tijera")
const btnPLayGame = $(".PlayGame")
const parrafo = $(".parra")
const parraComputer = $(".parraOne")
const parraWin = $(".parraTwo")
const parraPuntaje = $(".parraThree")
const parraELement = $(".parraFour")

let estado = "";
let humanScore = 0
let ComputerScore = 0


function getComputerChoice() {
    let computerCalculo = Math.floor(Math.random() * 3);
    if (computerCalculo === 0) {
        return PIEDRA
    } else if (computerCalculo === 1) {
        return PAPEL
    } else if (computerCalculo === 2) {
        return TIJERA
    }
} 

btnPiedra.addEventListener("click", () => {
    parrafo.textContent = "Piedra";
    estado = PIEDRA;
});

btnPapel.addEventListener("click", () => {
    parrafo.textContent = "Papel";
    estado = PAPEL;
});

btnTijera.addEventListener("click", () => {
    parrafo.textContent = "Tijeras";
    estado = TIJERA;
});

btnPLayGame.addEventListener("click", () => {
    playGame()
})


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 1
    } else if (humanChoice === "PAPEL" && computerChoice === "PIEDRA") {
        return 2
    } else if (humanChoice === "PIEDRA" && computerChoice === "TIJERA") {
        return 3
    } else if (humanChoice === "TIJERA" && computerChoice === "PAPEL") {
        return 4
    } else {
        return 5
    }
}

// Inicia el juego

function playGame() {
    
    const humanSelection = estado;
    const computerSelection = getComputerChoice();
    
    if (humanSelection === "") {
        alert("No has seleccionado ningun elemento")
        return "none"
    }
    parraComputer.textContent = computerSelection;
    let round = playRound(humanSelection, computerSelection)
        
    if (round === 1) {
        parraWin.textContent = "Empate";
    } else if (round === 2, 3, 4 && round !== 5) {
        parraWin.textContent = "Has ganado!";
        humanScore += 1
    } else if (round === 5) {
        parraWin.textContent = "Has perdido :(";
        ComputerScore += 1
    }
    
    if (humanScore >= 5) {
        alert("Has ganado!");
        humanScore = 0;
        ComputerScore = 0;
    } else if (ComputerScore >= 5) {
        alert("Has perdido :(");
        humanScore = 0;
        ComputerScore = 0;
    }

    parraPuntaje.textContent = humanScore;
    parraELement.textContent = ComputerScore;
}