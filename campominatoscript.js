/* window.addEventListener("load", function (){

}) */

var minNumber = 1;
var maxNumber = 100;
var aiNumbersLength = 16;


var aiNumbers = [];
var userNumbers = [];



var difficolta = -1;

while (difficolta < 0 || difficolta > 2) {
    difficolta = parseInt(prompt("Scegli una difficoltà tra 0 e 2"));

    switch (difficolta) {
        case 0:
            break;
        case 1:
            maxNumber = 80;
            break;
        case 2:
            maxNumber = 50;
            break;
    }
}

function askUserNumbers() {
    var userLenghtMax = maxNumber - minNumber - aiNumbersLength;

    var gameOver = false


    while (userNumbers.length <= userLenghtMax && !gameOver) {
        var userInput = prompt("Inserisci un numero tra " + minNumber + "e" + maxNumber + ".")
        var inputIsValid = checkUserInput(userInput);
        if (!inputIsValid && inputIsValid !== "game over") {
            alert("Numero inserito non valido")
        } else if (inputIsValid === "game over") {
            gameOver = true;

            alert("Hai perso il tuo punteggio è " + " " +userNumbers.length )



        } else {
            userNumbers.push(parseInt(userInput))
        }

        if (userNumbers.length === userLenghtMax) {
            alert("Hai vinto il tuo punteggio è " + " " + userNumbers.length )
            gameOver = true;
        }


    }
}

function checkUserInput(inputValue) {
    var result = true

    var numberToCheck = parseInt(inputValue)

    if (isNaN(numberToCheck)) {
        return false
    }

    if (numberToCheck < minNumber || numberToCheck > maxNumber) {
        return false
    }

    if (userNumbers.indexOf(numberToCheck) > -1) {
        return false
    }

    if (aiNumbers.indexOf(numberToCheck) > -1) {
        return "game over"
    }



    return result

}

function createAiNumbers() {
    do {
        var numeroRandom = generateRandomNumbers(minNumber, maxNumber);
        if (aiNumbers.indexOf(numeroRandom) === -1) {
            aiNumbers.push(numeroRandom)
        }

    } while (aiNumbers.length < aiNumbersLength)

    console.log(aiNumbers);


}

function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min


}



createAiNumbers();

console.log(userNumbers);

askUserNumbers();


