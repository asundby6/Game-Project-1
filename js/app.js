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
    startGame();
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

function startGame() {
    hidden = deck.pop();
    dealerSum += cardNumber(hidden);
    console.log(dealerSum);  // need to convert card to value



    while (dealerSum < 17) {


    }
  
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        
        document.getElementById("userCards").append(cardImg);
    }

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
    
    document.getElementById("userCards").append(cardImg);
    

}

function stand() {
    canHit = false;
    

}

function cardNumber(card) {
    splitValue = card.split("-") // 5-D = 5 of Diamonds
    numberValue = splitValue[0];

    // let faceCards = ["J", "Q", "K"];

    // if (numberValue.includes(faceCards)) {
    //     return 10;
    // }

    // if (isNaN(numberValue)) {
    //     console.log(numberValue);    
    // }

    // if (numberValue == "A") {
    //     return
    // }

    return parseInt(numberValue);
}






