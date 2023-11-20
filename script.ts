const formBtn = document.getElementById("inputBtn") as HTMLButtonElement

formBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const player1 = document.getElementById("player1") as HTMLInputElement
    const player2 = document.getElementById("player2") as HTMLInputElement

    let extraction: number = Math.floor(Math.random() * (100 - 1) + 1)
      console.log(extraction)
  
    const shownResult = document.getElementById("extractedNumber") as HTMLBaseElement

    const betResult = document.getElementById("betResult") as HTMLBaseElement
    shownResult.innerText = `And the extracted number is... ${extraction}`

    if(player1.value === extraction.toString()){
        betResult.innerText = "Player 1 won the bet!"
    } else if (player2.value === extraction.toString()) {
        betResult.innerText = "Player 2 won the bet!"
    } else if ((Math.abs(extraction - parseInt(player1.value))) < (Math.abs(extraction - parseInt(player2.value)))) {
        betResult.innerText = "Nobody won the bet, but Player 1 was closest!"
    } else if ((Math.abs(extraction - parseInt(player2.value))) < (Math.abs(extraction - parseInt(player1.value)))) {
        betResult.innerText = "Nobody won the bet, but Player 2 was closest!"
    }
}) 