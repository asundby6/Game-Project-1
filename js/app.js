var dealerSum = 0;
var userSum = 0;
var dealer_aceCount = 0;
var user_aceCount = 0;
var hidden;
var deck;
var canHit = true;

window.onload = function() {
    buildDeck();
    shuffleDeck();
    // startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++){
        for (let k = 0; k < values.length; k++){
            deck.push(values[k] + "-" + types[i]); 
        }
    }
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++){
        let k = Math.floor(Math.random() * deck.length);    
        let temp = deck[i];
        deck[i] = deck[k];
        deck[k] = temp;
    }
    console.log(deck); // displays in console the shuffled deck values (REMOVE LATER)
}

function betting(level) {
    let startingBalance = 100 * level;
    let maxBet = 10 * level;
}

function levelSelect(level) {

}


function startGame() {
    hidden = deck.pop();
    dealerSum += cardNumber(hidden);
    dealer_aceCount += checkAce(hidden);

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    dealerSum += cardNumber(card);
    dealer_aceCount += checkAce(card);
    document.getElementById("dealerCards").append(cardImg);
    
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        userSum += cardNumber(card);
        user_aceCount += checkAce(card);
        document.getElementById("userCards").append(cardImg);
    }

    console.log(userSum);
    document.getElementById("userSum").innerText = userSum;
    document.getElementById("dealerSum").innerText = cardNumber(card[0]);
    console.log(dealerSum);

    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stand").addEventListener("click", stand);

}

function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    userSum += cardNumber(card);
    user_aceCount += checkAce(card);
    document.getElementById("userCards").append(cardImg);
    
    if (reduceAce(userSum, user_aceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
        canHit = false;
        stand();
    }

    document.getElementById("userSum").innerText = userSum;
}

function stand() {
    dealerSum = reduceAce(dealerSum, dealer_aceCount);
    userSum = reduceAce(userSum, user_aceCount);

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";

    let message = "";

    while (dealerSum < 17 && canHit == false) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += cardNumber(card);
        dealer_aceCount += checkAce(card);
        document.getElementById("dealerCards").append(cardImg);
    }

    if (userSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You win!";
    }
    else if (userSum == dealerSum) {
        message = "Push!";
    }
    else if (userSum > dealerSum) {
        message = "You Win!";
    }
    else if (userSum < dealerSum) {
        message = "You Lose!";
    }
    
    document.getElementById("userSum").innerText = userSum;
    document.getElementById("dealerSum").innerText = dealerSum;
    document.getElementById("results").innerText = message;
}

function cardNumber(card) {
    splitValue = card.split("-") // 5-D = 5 of Diamonds
    numberValue = splitValue[0];

    if (isNaN(numberValue)) {
        if (numberValue == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(numberValue);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(userSum, user_aceCount) {
    while (userSum > 21 && user_aceCount > 0) {
        userSum -= 10;
        user_aceCount -= 1;
    }
    return userSum;
}