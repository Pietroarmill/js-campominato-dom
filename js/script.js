// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// Chidere all'utente quale difficoltà inserire
// const userChoice = prompt("A quale difficoltà vuoi giocare? (easy, difficult, hard)")

// [*] Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100. 
// [*] Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// [*] I numeri nella lista delle bombe non possono essere duplicati.
// [] In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// [] La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// [] Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// const easy = 100;
// const difficult = 81;
// const hard = 49;

let resultDifficulty;
let resultBox;

const bombs = 1;

document.querySelector("button").addEventListener("click", startGame);

function startGame() {
    
    const userDifficulty = document.getElementById("user-difficulty").value;

    const container = document.querySelector(".container");
    container.innerHTML = "";

    
    let difficulty;
    
   

    if (userDifficulty === "easy") {
        resultDifficulty = 100
        difficulty = "box-easy";
        
    }   else if (userDifficulty === "difficult") {
        resultDifficulty = 81
        difficulty = "box-difficult";
        
    }   else if (userDifficulty === "hard") {
        resultDifficulty = 49
        difficulty = "box-hard";
    }   else {
        difficulty = "";
    }
    
    let correctNumbersArray = [];

    const arrayBombs = getNumbersBombs(bombs, resultDifficulty);
    console.log(arrayBombs, "bombe");

    const correcTotalCells = resultDifficulty - bombs;
    console.log(correcTotalCells, "celle da cliccare per vincere");

    for (let i = 1; i <= resultDifficulty; i++) {
        
        const newElement = document.createElement("div");
        
        newElement.innerHTML = `<span>${i}</span>`
        
        newElement.classList.add("item", difficulty);
        
        container.append(newElement);

        newElement.addEventListener("click", function() {
            const thisNumber = parseInt(this.textContent);

            if (arrayBombs.includes(thisNumber)) {
                this.classList.add("bomb")
            }   else {
                this.classList.add("active");
                // lo rendo non più cliccabile
                this.style.pointerEvents = "none"

                correctNumbersArray.push(thisNumber)
                console.log(correctNumbersArray);
                console.log(correctNumbersArray.length, "lunghezza dell'array");

            }

            if (correctNumbersArray.length >= correcTotalCells ) {
                alert("HAI VINTO!!")
            }

        });
    }

}



// FUNCTION
function getIntNumbers (max) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}

// [*] Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// [*] I numeri nella lista delle bombe non possono essere duplicati.
function getNumbersBombs(numbersOfBombs, maxRange) {
    // creo una array che conterrà i 16 numeri che saranno di conseguenza le bombe, 
    // tramite l'utilizzo di una function esterna, genero numeri casuali che inserisco all'interno dell'array solo se quest'ultimo non è già all'interno
    const arrayBombs = [];
    while ( arrayBombs.length < numbersOfBombs ) {
        const thisNumberOfBombs = getIntNumbers(maxRange);
        if ( !arrayBombs.includes(thisNumberOfBombs) ) {
            arrayBombs.push(thisNumberOfBombs);
        }            
    }
    return arrayBombs;
}


