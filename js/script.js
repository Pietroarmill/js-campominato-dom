// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// Chidere all'utente quale difficoltà inserire
// const userChoice = prompt("A quale difficoltà vuoi giocare? (easy, difficult, hard)")
const easy = 100;
const difficult = 81;
const hard = 49;

let resultDifficulty;
let resultBox;

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