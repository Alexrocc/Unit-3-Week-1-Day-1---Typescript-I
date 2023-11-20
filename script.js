var formBtn = document.getElementById("inputBtn");
formBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var extraction = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(extraction);
    var shownResult = document.getElementById("extractedNumber");
    var betResult = document.getElementById("betResult");
    shownResult.innerText = "And the extracted number is... ".concat(extraction);
    if (player1.value === extraction.toString()) {
        betResult.innerText = "Player 1 won the bet!";
    }
    else if (player2.value === extraction.toString()) {
        betResult.innerText = "Player 2 won the bet!";
    }
    else if ((Math.abs(extraction - parseInt(player1.value))) < (Math.abs(extraction - parseInt(player2.value)))) {
        betResult.innerText = "Nobody won the bet, but Player 1 was closest!";
    }
    else if ((Math.abs(extraction - parseInt(player2.value))) < (Math.abs(extraction - parseInt(player1.value)))) {
        betResult.innerText = "Nobody won the bet, but Player 2 was closest!";
    }
});
