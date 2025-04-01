

function getComputerChoice() {
    let computerCalculo = Math.floor(Math.random() * 4);
    if (computerCalculo === 1) {
        return "PIEDRA"
    } else if (computerCalculo === 2) {
        return "PAPEL"
    } else if (computerCalculo === 3) {
        return "TIJERA"
    }
    return "none"
}

function getHumanChoice() {
    return prompt("Piedra, Papel o Tijera");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase()
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

function playGame() {        
    let humanScore = 0
    let ComputerScore = 0
    let i = 0

    while (i <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let game = playRound(humanSelection, computerSelection)
        if (game === 1, 2, 3, 4, 5 && game !== 5) {
            humanScore += 1
            console.log("Has ganado!")
        } else {
            ComputerScore += 1
            console.log("Has perdido")
        }
        
        i++
    }
    
    if (humanScore > ComputerScore) {
        return "Le has ganado a la maquina con " + humanScore + " Puntos!"
    } else {
        return "La maquina te ah ganado con " + ComputerScore + "Puntos :(" 
    }

}

console.log(playGame())

