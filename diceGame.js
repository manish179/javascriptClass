let randomNumber1 = Math.floor(Math.random() * 6) + 1 //1-6
let randomDiceImage = "dice" + randomNumber1 + ".png"  //dice1.png-dice6.png
let randomImageSource = "diceImage/" + randomDiceImage  //diceImage/dice1.png-diceImage/dice6.png
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute("src", randomImageSource) //to change attribute value use setAttribute


let randomNumber2 = Math.floor(Math.random() * 6) + 1 //1-6
let randomDiceImage1 = "dice" + randomNumber2 + ".png" //dice1.png-dice6.png
let randomImageSource1 = "diceImage/" + randomDiceImage1 //diceImage/dice1.png-diceImage/dice6.png
let image2 = document.querySelectorAll('img')[1]
image2.setAttribute("src", randomImageSource1) //to change attribute value use setAttrubute


if (randomNumber1 > randomNumber2) {
    document.querySelector('h2').innerHTML = "Player One Wins"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector('h2').innerHTML = "Player Two Wins"
}
else {
    document.querySelector('h2').innerHTML = "The match has been DRAW"
}
