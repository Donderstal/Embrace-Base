/* Creeren van de doos met vragen */
// A[I] We creeren een div

const questionBox = document.createElement("div");
questionBox.innerHTML = "What's up with all this Pharaoh shit going on over here?";
questionBox.className = "col-xs-6 col-xs-offset-3";
questionBox.id = "questionBox"

// A[II] We stoppen de div in de pagina
const body = document.getElementsByTagName("body")[0];
body.appendChild(questionBox)

/* Creeren van de doos met knoppen en antwoorden */

// B[I] We creeren een div
const answerBox = document.createElement("div");
answerBox.innerHTML = "Pick your answer, mortal!";
answerBox.className = "col-xs-6 col-xs-offset-3";
answerBox.setAttribute = ("class", "jumbotron vertical-center")
answerBox.id = "answerBox"

// B[II] We stoppen de div in de pagina
body.appendChild(answerBox);

// B[III] We creeeren knoppen in de div
function createButtons(){
    for (i = 1; i <= 4; i++) {
        const quizButton = document.createElement("button");
        quizButton.innerHTML = [i];
        quizButton.id = "buttonBox"
        answerBox.appendChild(quizButton);
    }
}

createButtons()

// B[IV] 

/* Creeren van de antwoorden */

