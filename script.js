
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let heading = document.querySelector("h1");

let newGame = document.getElementById("newGame")

newGame.addEventListener("click", function () {
    rollDice();
});


function rollDice() {
    const faces = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg", "six.jpg"];

    newGame.disabled = true;
    heading.innerHTML = "Rolling...";

    dice1.classList.add("rolling");
    dice2.classList.add("rolling");

    const spinInterval = setInterval(() => {
        const temp1 = Math.floor(Math.random() * 6);
        const temp2 = Math.floor(Math.random() * 6);
        dice1.src = "./" + faces[temp1];
        dice2.src = "./" + faces[temp2];
    }, 140);

    setTimeout(() => {
        clearInterval(spinInterval);

        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;

        dice1.src = "./" + faces[random1 - 1];
        dice2.src = "./" + faces[random2 - 1];

        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");

        if (random1 > random2) {
            heading.innerHTML = "Player 1 Wins!";
        }
        else if (random2 > random1) {
            heading.innerHTML = "Player 2 Wins!";
        }
        else {
            heading.innerHTML = "Draw!";
        }

        newGame.disabled = false;
    }, 1400);

}
