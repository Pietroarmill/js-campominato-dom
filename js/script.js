// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// Chidere all'utente quale difficoltà inserire
// const userChoice = prompt("A quale difficoltà vuoi giocare? (easy, difficult, hard)")

// [*] Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100. 
// [] Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// [] I numeri nella lista delle bombe non possono essere duplicati.
// [] In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// [] La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// [] Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const easy = 100;
const difficult = 81;
const hard = 49;

let resultDifficulty;
let resultBox;

const bombs = 16;

document.querySelector("button").addEventListener("click", startGame);

function startGame() {
    
    const userDifficulty = document.getElementById("user-difficulty").value;

    const container = document.querySelector(".container");
    container.innerHTML = "";

    if (userDifficulty === "easy") {
        resultDifficulty = 100

        for (let i = 1; i <= resultDifficulty; i++) {
    
            const newElement = document.createElement("div");
            
            newElement.innerHTML = `<span>${i}</span>`
            
            newElement.classList.add("item","box-easy");
            
            container.append(newElement);

            newElement.addEventListener("click", function() {
                this.classList.toggle("active");
            });
        }

    }   else if (userDifficulty === "difficult") {
        resultDifficulty = 81

        for (let i = 1; i <= resultDifficulty; i++) {
    
            const newElement = document.createElement("div");
            
            newElement.innerHTML = `<span>${i}</span>`
            
            newElement.classList.add("item","box-difficult");
            
            container.append(newElement);

            newElement.addEventListener("click", function() {
                this.classList.toggle("active");
            });
        }
    
    }   else if (userDifficulty === "hard") {
        resultDifficulty = 49

        for (let i = 1; i <= resultDifficulty; i++) {
        
            const newElement = document.createElement("div");
            
            newElement.innerHTML = `<span>${i}</span>`
            
            newElement.classList.add("item","box-hard");
            
            container.append(newElement);

            newElement.addEventListener("click", function() {
                this.classList.toggle("active");
            });
        }

    }
}


// FUNCTION
function getIntNumbers (max) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

// [] Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
function getNumbersBombs(numbersOfBombs, maxRange) {
    const arrayBombs = [];
    while ( arrayBombs.length < numbersOfBombs ) {
        const thisNumberOfBombs = getIntNumbers(maxRange);
        if ( !arrayBombs.includes(thisNumberOfBombs) ) {
            arrayBombs.push(thisNumberOfBombs);
        }            
    }
    return arrayBombs;
}

const bombsNumbers = getNumbersBombs(16, 100);
console.log(bombsNumbers);