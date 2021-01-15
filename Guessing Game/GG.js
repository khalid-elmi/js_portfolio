var btn = document.getElementById("btn")
var output = document.getElementById("outputText")

var number = 6

btn.addEventListener("click", theGuess)

function theGuess() {
    var input = document.getElementById("userInput").value

    if (input == number) {
        output.innerHTML = "CORRECT! , THE SECRET NUMBER WAS 6"
    } else if (input < number) {
        output.innerHTML = "Incorrect, Your guess was Too low :("
    } else if (input > number) {
        output.innerHTML = "Incorrect, Your guess was Too High :("
    };

}