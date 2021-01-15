var btn = document.getElementById("btn")
var secret = 6
btn.addEventListener("click", theGuess)

function theGuess() {
    var answer = prompt("Please guess the secret number(1 - 10)");
    var guess = parseInt(answer);

    while (guess != secret) {
        if (guess == secret) {
            alert("CORRECT! , THE SECRET NUMBER WAS 6");
            break;
        } else if (guess > secret) {
            alert("Incorrect, Your guess was Too High :(")
            break;
        } else if (guess < secret) {
            alert("Incorrect, Your guess was Too low :(")
            break;
        }
    };
}