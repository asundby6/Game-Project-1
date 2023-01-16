window.onload = function() {
    balanceTotal = sessionStorage.getItem("balanceTotal"); 
    betting(balanceTotal);
    buildDeck();
    shuffleDeck();
}



function betting(balanceTotal){
    balanceTotal = sessionStorage.getItem("balanceTotal");
    betTotal = 0;
    document.getElementById("balanceTotal").textContent = balanceTotal;
    maxBet = balanceTotal;

    if(balanceTotal > 1000){
        if(balanceTotal > 1000 && balanceTotal < 5000){
            newDealer = document.createElement("img");
            newDealer.src = "dealerDuck.png";
            newDealer.id = "dealer";
            document.getElementById("upper").append(newDealer);
        }
        else if(balanceTotal > 5000 && balanceTotal < 10000){
            let newDealer = document.createElement("img");
            newDealer.src = "bj_endGame.png";
            newDealer.id = "dealer";
            newDealer.style.width = "155px";
            newDealer.style.height = "130px";
            document.getElementById("upper").append(newDealer);
        }
        else if(balanceTotal > 10000 && balanceTotal < 20000){
            newDealer = document.createElement("img");
            newDealer.src = "bj_dealer.jpeg";
            newDealer.id = "dealer";
            newDealer.style.width = "171px";
            newDealer.style.height = "121px";
            document.getElementById("upper").append(newDealer);
        }
        else if(balanceTotal > 20000){
            newDealer = document.createElement("img");
            newDealer.src = "bj_dealer1.jpeg";
            newDealer.id = "dealer";
            newDealer.style.width = "125px";
            newDealer.style.height = "125px";
            document.getElementById("upper").append(newDealer);
        }
    }

    let whiteChip = document.getElementById("whiteChip");
    let redChip = document.getElementById("redChip");
    let greenChip = document.getElementById("greenChip");
    let blueChip = document.getElementById("blueChip");
    let blackChip = document.getElementById("blackChip");

    let betButton = document.getElementById("betButton");
    let totalBet = document.getElementById("amount_ofBet");
    let allIn = document.getElementById("allIn");

    whiteChip.addEventListener("click", () => {
    if(betTotal < balanceTotal){
        betTotal += 10;
        totalBet.textContent = betTotal;
        }
    })

    redChip.addEventListener("click", () => {
        if(betTotal < balanceTotal){
        betTotal += 50;
        totalBet.textContent = betTotal;
        }
    })

    greenChip.addEventListener("click", () => {
        if(betTotal < balanceTotal){
        betTotal += 100;
        totalBet.textContent = betTotal;
        }
    })

    blueChip.addEventListener("click", () => {
        if(betTotal < balanceTotal){
        betTotal += 500;
        totalBet.textContent = betTotal;
        }
    })

    blackChip.addEventListener("click", () => {
        if(betTotal < balanceTotal){
        betTotal += 1000;
        totalBet.textContent = betTotal;
        }
    })

    betButton.addEventListener("click", () => {
        if(maxBet < betTotal){
            betTotal = maxBet;
        }
        console.log(betTotal);
        balanceTotal -= betTotal;
        whiteChip.hidden = true;
        redChip.hidden = true;
        greenChip.hidden = true;
        blueChip.hidden = true;
        blackChip.hidden = true;
        betButton.hidden = true;
        playGame(betTotal,balanceTotal);
    })

    allIn.addEventListener("click", () => {
        betTotal = maxBet;
        balanceTotal -= betTotal;
        playGame(betTotal,balanceTotal);
    })
    
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

// function buildDeck() {
//     let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
//     let types = ["C", "D", "H", "S"];
//     deck = [];

//     deck.push("K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S");
//     deck.push("A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S","A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S","A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S")
//     console.log(deck); // displays in console the shuffled deck values (REMOVE LATER)

// }

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++){
        let k = Math.floor(Math.random() * deck.length);    
        let temp = deck[i];
        deck[i] = deck[k];
        deck[k] = temp;
    }
    console.log(deck); 
}

function playGame(betAmount, balanceTotal){
    this.balanceTotal = balanceTotal;
    this.betAmount = betAmount;

    sessionStorage.setItem("balanceTotal",this.balanceTotal);

    let totalBalance = document.getElementById("balanceTotal");
    totalBalance.textContent = this.balanceTotal;

    let hitButton = document.createElement("button");
    hitButton.textContent = "Hit";
    hitButton.id = "hit";
    document.getElementById("middle").append(hitButton);

    let standButton = document.createElement("button");
    standButton.textContent = "Stand";
    standButton.id = "stand";
    document.getElementById("middle").append(standButton);

    let doubleButton = document.createElement("button");
    doubleButton.textContent = "Double";
    doubleButton.id = "double";
    document.getElementById("middle").append(doubleButton);


    console.log("Starting the game with : " + betAmount)
    let userCards = [];
    let dealerCards = [];
    let allinButton = document.getElementById("allIn");

    allinButton.hidden = true;
    whiteChip.hidden = true;
    redChip.hidden = true;
    greenChip.hidden = true;
    blueChip.hidden = true;
    blackChip.hidden = true;
    betButton.hidden = true;

    dealer_card1 = deck.pop();
    dealerCards.push(dealer_card1);
    dealer_card1.id = "dealer_card1";

    user_card1 = deck.pop();
    userCards.push(user_card1);
    user_card1.id = "user_card1";

    dealer_card2 = deck.pop();
    dealerCards.push(dealer_card2);
    dealer_card2.id = "dealer_card2";
    
    user_card2 = deck.pop();
    userCards.push(user_card2);
    user_card2.id = "user_card2";

    console.log(dealerCards);
    console.log(userCards);
    
    let cardImg_dealer1 = document.createElement("img");
    cardImg_dealer1.src = "./cards/BACK.png";
    cardImg_dealer1.id = "flipCard";
    document.getElementById("dealerCards").append(cardImg_dealer1);
    let cardImg_dealer2 = document.createElement("img")
    cardImg_dealer2.src = "./cards/" + dealer_card2 + ".png";
    document.getElementById("dealerCards").append(cardImg_dealer2);

    let cardImg_user1 = document.createElement("img");
    cardImg_user1.src = "./cards/" + user_card1 + ".png";
    document.getElementById("userCards").append(cardImg_user1);
    let cardImg_user2 = document.createElement("img")
    cardImg_user2.src = "./cards/" + user_card2 + ".png";
    document.getElementById("userCards").append(cardImg_user2);

    dealerDeck = new cardValue(dealer_card2);
    userDeck = new cardValue(user_card1);
    userDeck2 = new cardValue(user_card2);

    scoreDealer = 0;
    scoreUser = 0;
    userScore = document.getElementById("userScore");
    dealerScore = document.getElementById("dealerScore");

    scoreDealer += dealerDeck.cardval;
    dealerScore.textContent = scoreDealer;

    scoreUser += userDeck.cardval;
    scoreUser += userDeck2.cardval;
    userScore.textContent = scoreUser;

    splitting1 = user_card1.split("-");
    let value1 = splitting1[0];
    console.log(value1);
    splitting2 = user_card2.split("-");
    let value2 = splitting2[0];
    console.log(value2);

    if( value1 == value2) {
        let splitButton = document.createElement("button");
        splitButton.textContent = "Split"
        splitButton.id = "split";
        document.getElementById("betBox").append(splitButton);
        splitButton.textContent = "Split";
        splitButton.style.width = "100px";
        splitButton.style.height = "50px";
        splitButton.style.fontSize = "20px";
        splitButton.style.color = "black";
        splitButton.style.fontWeight = "bold";
        splitButton.style.backgroundColor = "goldenrod";

        splitButton.addEventListener("click", () => {            
            split(userDeck.cardval, userDeck.cardval2);
        });
        
        document.getElementById("stand").addEventListener("click", () => {
            let hit_btn = document.getElementById("hit");
            let stand_btn = document.getElementById("stand");
            let split_btn = document.getElementById("split");
            remove(hit_btn);
            remove(stand_btn);
            remove(split_btn);
        });
    }


    hitButton.addEventListener("click", () =>{
        hit(scoreUser);
    });
    
    standButton.addEventListener("click", () => {
        stand();
    })

    doubleButton.addEventListener("click", () => {
        if(betAmount*2 > sessionStorage.getItem("totalBalance")){
            this.balanceTotal -= betAmount;
            betAmount += betAmount;
            hit(scoreUser);
        }
    })
}

let counter = 0;

class cardValue {
    constructor(card){
        counter += 1;
        // console.log(counter);
        let value = card.split("-");
        this.number = value[0];
        this.suit = value[2];
    }

        get cardval(){
        if(isNaN(this.number)){ 
            if (this.number === "A"){
                if(counter <= 3){
                    return 1;
                }
                else{
                    return 10;
                }
            }
            return 10;
        }
        else{
            return parseInt(this.number);
        }
    }
}

function hit(total){
    totalBet = total;
    var a = sfxr.toAudio("7BMHBGEZ5yi8YuzS8Dv3p5RBLueV8CWZY8jfBD2nm9c1kB4nYoQETGpKn3eE3Au4APjmqsHvXdUAPZD187sLGN2UDYRfNfSddnm2zeC7gc4jBRQLmM7LEeWgX");
    a.play();

    
    // else if(hitTotal > 1){

    // }
    let doubleButton = document.getElementById("double");
    doubleButton.hidden = true;
    let hitButton = document.getElementById("hit");
    let standButton = document.getElementById("stand");
    if(total <= 21){
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("userCards").append(cardImg)
    
        addingDeck = new cardValue(card);
        scoreUser += addingDeck.cardval;
        userScore.textContent = scoreUser;
    }
    else if(total >= 21){
        hitButton.hidden = true;
        standButton.hidden = true;
        stand();
    }
}

function stand(){
    let doubleButton = document.getElementById("double");
    doubleButton.hidden = true;
    let hitButton = document.getElementById("hit");
    let standButton = document.getElementById("stand");
    hitButton.hidden = true;
    standButton.hidden = true;
    let flipCard = document.getElementById("flipCard");
    flipCard.src = "./cards/" + dealer_card1 + ".png";
    let dealerDeckOther = new cardValue(dealer_card1);
    scoreDealer += dealerDeckOther.cardval;
    dealerScore = document.getElementById("dealerScore");
    dealerScore.textContent = scoreDealer;

    while(scoreDealer <= 16){
        let cpu_cardImg = document.createElement("img");
        let cpuCard = deck.pop();
        cpu_cardImg.src = "./cards/" + cpuCard + ".png";
        document.getElementById("dealerCards").append(cpu_cardImg)
    
        addingDeck = new cardValue(cpuCard);
        scoreDealer += addingDeck.cardval;
        dealerScore.textContent = scoreDealer;
    }

    finalMessage = document.getElementById("finalMessage");

    if (scoreUser > 21){
        finalMessage.style.color = "red"
        finalMessage.textContent = "You Lose";
        this.balanceTotal -= betAmount;
    }
    else if (scoreDealer > 21 && scoreUser <= 21){
        finalMessage.style.color = "green"
        finalMessage.textContent = "You Win";
        this.balanceTotal += betAmount*2;
    }
    else if (scoreDealer > scoreUser){
        finalMessage.style.color = "red"
        finalMessage.textContent = "You Lose";
    }
    else if (scoreUser > scoreDealer){
        finalMessage.style.color = "green"
        finalMessage.textContent = "You Win";
        this.balanceTotal += betAmount*2;
    }
    else if (scoreUser == scoreDealer){
        finalMessage.textContent = "Push"
        this.balanceTotal += betAmount;
    }
    sessionStorage.setItem("balanceTotal",this.balanceTotal);
    
    if(this.balanceTotal > 0){
        this.balanceTotal = sessionStorage.getItem("balanceTotal");
        let balanceTotal = document.getElementById("balanceTotal");
        balanceTotal.textContent = this.balanceTotal;
        let next_gameButton = document.createElement("button");
        next_gameButton.textContent = "Play Again";
        document.getElementById("upper").append(next_gameButton);
        next_gameButton.addEventListener("click", () => {
            window.location.reload();
        })

    }
    else if(this.balanceTotal <= 0){
        finalMessage.textContent = "YOU'RE OUT OF FUNDS";
        let balanceTotal = document.getElementById("balanceTotal");
        balanceTotal.textContent = this.balanceTotal;
        let next_gameButton = document.createElement("button");
        next_gameButton.textContent = "Play Again";
        document.getElementById("upper").append(next_gameButton);
        next_gameButton.addEventListener("click", () => {
            sessionStorage.setItem("balanceTotal", 9999); //----------------------------------------------------------
            window.location.reload();
        })
    }

}

function split(){
    
    let hit_btn = document.getElementById("hit");
    let stand_btn = document.getElementById("stand");
    let userValue = document.getElementById("userScore");
    let split_btn = document.getElementById("split");

    // remove(hit_btn);
    // remove(stand_btn);
    // remove(split_btn);
    // remove(userValue);
    hit_btn.hidden = true;
    stand_btn.hidden = true;
    userValue.hidden = true;
    split_btn.hidden = true;


    div1 = document.createElement("div");   // creates  div1 top layer of middle
    div1.id = "splitTop";
    div1.style.display = "inline";
    document.getElementById("middle").append(div1);
    
    div2 = document.createElement("div");   // creates div2 bottom layer of middle
    div2.id = "splitBottom";
    div2.style.display = "inline-block";
    document.getElementById("middle").append(div2);
    
    h2_userSum1 = document.createElement("h2"); // userSum for top hand
    h2_userSum1.id = "top_userSum";
    let userScore = new cardValue(user_card1);
    h2_userSum1.textContent = "Hand 1 : " + userScore.cardval;
    div1.append(h2_userSum1);

    h2_userSum2 = document.createElement("h2"); // userSum for bottom hand
    h2_userSum2.id = "bottom_userSum";
    let userSum2 = new cardValue(user_card2);
    h2_userSum2.textContent = "Hand 2 : " + userSum2.cardval;
    div2.append(h2_userSum2);

    hit_btn1 = document.createElement("button");    // creates top hit button
    hit_btn1.textContent = "Hit";
    hit_btn1.id = "hit1";
    hit_btn1.style.width = "100px";
    hit_btn1.style.height = "50px";
    hit_btn1.style.fontSize = "20px";
    hit_btn1.style.display = "block";
    hit_btn1.style.marginLeft = "150px";
    hit_btn1.style.color = "black";
    hit_btn1.style.fontWeight = "bold";
    hit_btn1.style.backgroundColor = "goldenrod";
    div1.append(hit_btn1);

    stand_btn1 = document.createElement("button"); // creates top stand button
    stand_btn1.textContent = "Stand";
    stand_btn1.id = "stand1";
    stand_btn1.style.width = "100px";
    stand_btn1.style.height = "50px";
    stand_btn1.style.fontSize = "20px";
    stand_btn1.style.display = "block";
    stand_btn1.style.marginLeft = "150px";
    stand_btn1.style.color = "black";
    stand_btn1.style.fontWeight = "bold";
    stand_btn1.style.backgroundColor = "goldenrod";

    div1.append(stand_btn1);
    
    user_card1 = document.getElementById("user_card1");   // adds card1 to its own div
   
    div1.append(user_card1);

    hit_btn2 = document.createElement("button");    // creates bottom hit button
    hit_btn2.textContent = "Hit";
    hit_btn2.id = "hit1";
    hit_btn2.style.width = "100px";
    hit_btn2.style.height = "50px";
    hit_btn2.style.fontSize = "20px";
    hit_btn2.style.display = "block";
    hit_btn2.style.marginLeft = "150px";
    hit_btn2.style.color = "black";
    hit_btn2.style.fontWeight = "bold";
    hit_btn2.style.backgroundColor = "goldenrod";
    div2.append(hit_btn2);

    stand_btn2 = document.createElement("button"); // creates bottom stand button
    stand_btn2.textContent = "Stand";
    stand_btn2.id = "stand2";
    stand_btn2.style.width = "100px";
    stand_btn2.style.height = "50px";
    stand_btn2.style.fontSize = "20px";
    stand_btn2.style.display = "block";
    stand_btn2.style.marginLeft = "150px";
    stand_btn2.style.color = "black";
    stand_btn2.style.fontWeight = "bold";
    stand_btn2.style.backgroundColor = "goldenrod";
    div2.append(stand_btn2);

    user_card2 = document.getElementById("user_card2");   // adds card2 to its own div
    
    div2.append(user_card2);

    topResults = document.createElement("p");
    topResults.id = "topResults";
    topResults.style.color = "red";
    div1.append(topResults);

    bottomResults = document.createElement("p");
    bottomResults.id = "bottomResults";
    bottomResults.style.color = "red";
    div2.append(bottomResults);

    hit_btn1.addEventListener("click", () => {
        let uCV1 = document.getElementById(user_card1);
        let total = 0;
        total += uCV1;
        topResults.textContent = total;
        splitHit(1, total);
    })

    hit_btn2.addEventListener("click", () => {
        let uCV2 = document.getElementById(user_card2);
        let total = 0;
        total += uCV2;
        bottomResults.textContent = total;
        splitHit(2, total);
    })

    function splitHit(top_or_bottom, total){
        
        this.top_or_bottom = top_or_bottom;
        if(top_or_bottom == 1){
            
            var a = sfxr.toAudio("7BMHBGEZ5yi8YuzS8Dv3p5RBLueV8CWZY8jfBD2nm9c1kB4nYoQETGpKn3eE3Au4APjmqsHvXdUAPZD187sLGN2UDYRfNfSddnm2zeC7gc4jBRQLmM7LEeWgX");
            a.play();
            if(total <= 21){
                let cardImg = document.createElement("img");
                let card = deck.pop();
                cardImg.src = "./cards/" + card + ".png";
                div1.append(cardImg)
                cardImg.style.width = "50px";
                cardImg.style.height = "50px";
                addingDeck = new cardValue(card);
                total += addingDeck.cardval;
                topResults = total;
                h2_userSum1.textContent = topResults;
            }
           

        }
        if(top_or_bottom == 2){
            var a = sfxr.toAudio("7BMHBGEZ5yi8YuzS8Dv3p5RBLueV8CWZY8jfBD2nm9c1kB4nYoQETGpKn3eE3Au4APjmqsHvXdUAPZD187sLGN2UDYRfNfSddnm2zeC7gc4jBRQLmM7LEeWgX");
            a.play();

            if(total <= 21){
                let cardImg = document.createElement("img");
                let card = deck.pop();
                cardImg.src = "./cards/" + card + ".png";
                div2.append(cardImg)
                cardImg.style.width = "50px";
                cardImg.style.height = "50px";
                addingDeck = new cardValue(card);
                total += addingDeck.cardval;
                h2_userSum2.textContent = total;
            }

        }
        
    }

    function splitStand(){

    }
  
}