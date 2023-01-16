// var dealerSum = 0;
// var userSum = 0;
// var dealer_aceCount = 0;
// var user_aceCount = 0;
// var hidden;
// var deck;
// var canHit = true;

// window.onload = function() {
//     buildDeck();
//     shuffleDeck();
//     startGame();
// }

// // function buildDeck() {
// //     let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
// //     let types = ["C", "D", "H", "S"];
// //     deck = [];

// //     deck.push("K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S","K-S", "K-S");
// //     deck.push("A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S","A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S","A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S", "A-S")
// //     console.log(deck); // displays in console the shuffled deck values (REMOVE LATER)

// // }

// function buildDeck() {
//     let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
//     let types = ["C", "D", "H", "S"];
//     deck = [];

//     for (let i = 0; i < types.length; i++){
//         for (let k = 0; k < values.length; k++){
//             deck.push(values[k] + "-" + types[i]); 
//         }
//     }
// }

// function shuffleDeck() {
//     for (let i = 0; i < deck.length; i++){
//         let k = Math.floor(Math.random() * deck.length);    
//         let temp = deck[i];
//         deck[i] = deck[k];
//         deck[k] = temp;
//     }
//     console.log(deck); // displays in console the shuffled deck values (REMOVE LATER)
// }


// function betting(level) {
//     let startingBalance = 100 * level;
//     let maxBet = 10 * level;
// }


// function startGame() {

//     hidden = deck.pop();
//     dealerSum += cardNumber(hidden);
//     dealer_aceCount += checkAce(hidden);

    // let cardImg = document.createElement("img");
    // let card = deck.pop();
    // cardImg.src = "./cards/" + card + ".png";
    // dealerSum += cardNumber(card);
    // dealer_aceCount += checkAce(card);
    // document.getElementById("dealerCards").append(cardImg);

//     let dealer_cardArray = [hidden, card];
//     let user_cardArray = [];
//     let user_sumAceless = reduceAce(userSum, user_aceCount);

//     for (let i = 0; i < 2; i++) {

//         let cardImg = document.createElement("img");
//         cardImg.id = "userCard" +i;
//         let card = deck.pop();
//         cardImg.src = "./cards/" + card + ".png";
//         document.getElementById("userCards").append(cardImg);
//         userSum += cardNumber(card);
//         user_aceCount += checkAce(card);
//         user_sumAceless += checkAce(card);
//         user_cardArray.push(card);
//         document.getElementById("userSum").innerText = userSum;

//     }


//     if (cardValue(user_cardArray[0]) == cardValue(user_cardArray[1])){
//         let uCard1 = user_cardArray[0];
//         let uCard2 = user_cardArray[1];

//         let splitButton = document.createElement("button");
//         splitButton.id = "split";
//         document.getElementById("buttons").append(splitButton);
//         splitButton.textContent = "Split";
//         splitButton.style.width = "100px";
//         splitButton.style.height = "50px";
//         splitButton.style.fontSize = "20px";
//         splitButton.style.color = "black";
//         splitButton.style.fontWeight = "bold";
//         splitButton.style.backgroundColor = "goldenrod";

//         splitButton.addEventListener("click", () => {            
//             split(uCard1, uCard2);
//         });
        
//         document.getElementById("stand").addEventListener("click", () => {
//             let hit_btn = document.getElementById("hit");
//             let stand_btn = document.getElementById("stand");
//             let split_btn = document.getElementById("split");
//             remove(hit_btn);
//             remove(stand_btn);
//             remove(split_btn);
//         });
    

//     // if(checkAce(user_cardArray[0]) == 1 || checkAce(user_cardArray[1]) == 1){
//     // document.getElementById("userSum").innerText = user_sumAceless + "/" + userSum;
//     // document.getElementById("userSum").innerText =  userSum;
//     // document.getElementById("hit").addEventListener("click", hit);
//     // document.getElementById("stand").addEventListener("click", stand);
//     // }
    
//     document.getElementById("userSum").innerText = userSum;

//     // if(checkAce(dealer_cardArray[0]) == 1 || checkAce(dealer_cardArray[1]) == 1){
//     // document.getElementById("dealerSum").innerText = cardNumber(dealer_cardArray[0]);
//     // document.getElementById("dealerSum").innerText = cardNumber(dealer_cardArray[1]);
//     // document.getElementById("hit").addEventListener("click", hit);
//     // document.getElementById("stand").addEventListener("click", stand);
//     // }
// }
// document.getElementById("hit").addEventListener("click", hit);
// document.getElementById("stand").addEventListener("click", stand);
// }

// function hit() {
//     if (!canHit) {
//         stand();
//         let hit_btn = document.getElementById("hit");
//         remove(hit_btn);
//     }

//     if (userSum > 21 || reduceAce(userSum,user_aceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
//         canHit = false;
//         return;
//     }

//     else {
//         var a = sfxr.toAudio("7BMHBGEZ5yi8YuzS8Dv3p5RBLueV8CWZY8jfBD2nm9c1kB4nYoQETGpKn3eE3Au4APjmqsHvXdUAPZD187sLGN2UDYRfNfSddnm2zeC7gc4jBRQLmM7LEeWgX");
//         a.play();
//         let cardImg = document.createElement("img");
//         let card = deck.pop();
//         cardImg.src = "./cards/" + card + ".png";
//         document.getElementById("userCards").append(cardImg);
//         userSum += cardNumber(card);
//         document.getElementById("userSum").innerText =  userSum;
//         user_sumAceless = reduceAce(userSum, user_aceCount);
//         document.getElementById("userSum").innerText = user_sumAceless + "/" + userSum;
//     }
    
    
// }

// function stand() {
//     startNextRound = document.createElement("button");
//     startNextRound.id = "startRound";
//     startNextRound.textContent = "Retry";
//     startNextRound.style.width = "100px";
//     startNextRound.style.height = "50px";
//     startNextRound.style.backgroundColor = "goldenrod";
//     startNextRound.style.fontSize = "20px";
//     startNextRound.style.color = "black";
//     startNextRound.style.fontWeight = "bold";
//     document.getElementById("buttons").append(startNextRound);

//     startNextRound.addEventListener("click", () =>{
//         window.location.reload();
//     });
    
//     stand_btn = document.getElementById("stand");
//     remove(stand_btn); 
    

//     while(reduceAce(dealerSum, dealer_aceCount) < 17){
//         document.getElementById("hidden").src = "./cards/" + hidden + ".png";
//         dealer_sumAceless = reduceAce(dealerSum, dealer_aceCount);
//         let cardImg = document.createElement("img");
//         let card = deck.pop();
//         cardImg.src = "./cards/" + card + ".png";
//         dealerSum += cardNumber(card);
//         dealer_aceCount += checkAce(card);
//         document.getElementById("dealerCards").append(cardImg);
//         document.getElementById("dealerSum").innerText = dealer_sumAceless + "/" + dealerSum;
        
//     }

//     dealer_sumAceless = reduceAce(dealerSum, dealer_aceCount);
//     user_sumAceless = reduceAce(userSum, user_aceCount);

//     if (user_sumAceless > 21) {
//         message = "You Lose!";
//     }
//     else if (dealer_sumAceless > 21) {
//         message = "You win!";
//     }
//     else if (user_sumAceless == dealer_sumAceless) {
//         message = "Push!";
//     }
//     else if (user_sumAceless > dealer_sumAceless) {
//         message = "You Win!";
//     }
//     else if (user_sumAceless < dealer_sumAceless) {
//         message = "You Lose!";
        
//     }
  

//     document.getElementById("userSum").innerText = user_sumAceless + "/" + userSum;
//     document.getElementById("dealerSum").innerText = dealer_sumAceless + "/" + dealerSum;
//     document.getElementById("results").innerText = message;


//     }


// function cardNumber(card) { // used to calculate hand total
//     splitValue = card.split("-"); // 5-D = 5 of Diamonds
//     numberValue = splitValue[0];

//     if (isNaN(numberValue)) {
//         if (numberValue == "A") {
//             return 11;
//         }
//         return 10;
//     }
//     return parseInt(numberValue);
// }

// function checkAce(card) {
//     if (card[0] == "A") {
//         return 1;
//     }
//     return 0;
// }

// function reduceAce(userSum, user_aceCount) {
//     while (userSum > 21 && user_aceCount > 0) {
//         userSum -= 10;
//         user_aceCount -= 1;
//     }
//     return userSum;
// }

// function cardSuit(card){
//     splitValue = card.split("-"); // 5-D = 5 of Diamonds
//     suitValue = splitValue[1];
//     return suitValue;
// }
// function cardValue(card){   // used to detect split possibility
//     splitValue = card.split("-");
//     numberValue = splitValue[0];
//     return numberValue;
// }

// function split(userCard1, userCard2){
//     let hit_btn = document.getElementById("hit");
//     let stand_btn = document.getElementById("stand");
//     let split_btn = document.getElementById("split");
//     let userValue = document.getElementById("userSum");

//     remove(hit_btn);
//     remove(stand_btn);
//     remove(split_btn);
//     remove(userValue);
    
//     div1 = document.createElement("div");   // creates  div1 top layer of middle
//     div1.id = "splitTop";
//     div1.style.display = "block";
//     document.getElementById("middle").append(div1);
    
//     div2 = document.createElement("div");   // creates div2 bottom layer of middle
//     div2.id = "splitBottom";
//     div2.style.display = "block";
//     document.getElementById("middle").append(div2);
    
//     h2_userSum1 = document.createElement("h2"); // userSum for top hand
//     h2_userSum1.id = "top_userSum";
//     userSum1 = cardNumber(userCard1);
//     h2_userSum1.textContent = "Hand 1 : " + userSum1;
//     div1.append(h2_userSum1);

//     h2_userSum2 = document.createElement("h2"); // userSum for bottom hand
//     h2_userSum2.id = "bottom_userSum";
//     userSum2 = cardNumber(userCard2);
//     h2_userSum2.textContent = "Hand 2 : " + userSum2;
//     div2.append(h2_userSum2);

//     hit_btn1 = document.createElement("button");    // creates top hit button
//     hit_btn1.textContent = "Hit";
//     hit_btn1.id = "hit1";
//     hit_btn1.style.width = "100px";
//     hit_btn1.style.height = "50px";
//     hit_btn1.style.fontSize = "20px";
//     hit_btn1.style.display = "block";
//     hit_btn1.style.marginLeft = "150px";
//     hit_btn1.style.color = "black";
//     hit_btn1.style.fontWeight = "bold";
//     hit_btn1.style.backgroundColor = "goldenrod";
//     div1.append(hit_btn1);

//     stand_btn1 = document.createElement("button"); // creates top stand button
//     stand_btn1.textContent = "Stand";
//     stand_btn1.id = "stand1";
//     stand_btn1.style.width = "100px";
//     stand_btn1.style.height = "50px";
//     stand_btn1.style.fontSize = "20px";
//     stand_btn1.style.display = "block";
//     stand_btn1.style.marginLeft = "150px";
//     stand_btn1.style.color = "black";
//     stand_btn1.style.fontWeight = "bold";
//     stand_btn1.style.backgroundColor = "goldenrod";

//     div1.append(stand_btn1);
    
//     userCard1 = document.getElementById("userCard0");   // adds card1 to its own div
//     userCard1.style.height = "175px";
//     userCard1.style.width = "125px";
//     userCard1.style.margin = "1px";
//     userCard1.style.marginLeft = "100px";
//     div1.append(userCard1);

//     hit_btn2 = document.createElement("button");    // creates bottom hit button
//     hit_btn2.textContent = "Hit";
//     hit_btn2.id = "hit1";
//     hit_btn2.style.width = "100px";
//     hit_btn2.style.height = "50px";
//     hit_btn2.style.fontSize = "20px";
//     hit_btn2.style.display = "block";
//     hit_btn2.style.marginLeft = "150px";
//     hit_btn2.style.color = "black";
//     hit_btn2.style.fontWeight = "bold";
//     hit_btn2.style.backgroundColor = "goldenrod";
//     div2.append(hit_btn2);

//     stand_btn2 = document.createElement("button"); // creates bottom stand button
//     stand_btn2.textContent = "Stand";
//     stand_btn2.id = "stand2";
//     stand_btn2.style.width = "100px";
//     stand_btn2.style.height = "50px";
//     stand_btn2.style.fontSize = "20px";
//     stand_btn2.style.display = "block";
//     stand_btn2.style.marginLeft = "150px";
//     stand_btn2.style.color = "black";
//     stand_btn2.style.fontWeight = "bold";
//     stand_btn2.style.backgroundColor = "goldenrod";
//     div2.append(stand_btn2);

//     userCard2 = document.getElementById("userCard1");   // adds card2 to its own div
//     userCard2.style.height = "175px";
//     userCard2.style.width = "125px";
//     userCard2.style.margin = "1px";
//     userCard2.style.marginLeft = "100px";
//     div2.append(userCard2);

//     topResults = document.createElement("p");
//     topResults.id = "topResults";
//     topResults.style.color = "red";
//     div1.append(topResults);

//     bottomResults = document.createElement("p");
//     bottomResults.id = "bottomResults";
//     bottomResults.style.color = "red";
//     div2.append(bottomResults);

//     let user_aceCount1 = 0;
//     let user_aceCount2 = 0;

//     canHit1 = true;
//     canHit2 = true;

//     function splitHit(handNumber){
//         var a = sfxr.toAudio("7BMHBGEZ5yi8YuzS8Dv3p5RBLueV8CWZY8jfBD2nm9c1kB4nYoQETGpKn3eE3Au4APjmqsHvXdUAPZD187sLGN2UDYRfNfSddnm2zeC7gc4jBRQLmM7LEeWgX");
//         a.play();

//         let cardImg = document.createElement("img");
//         let card = deck.pop();
//         cardImg.src = "./cards/" + card + ".png";
//         cardImg.style.height = "175px";
//         cardImg.style.width = "125px";
//         cardImg.style.margin = "1px";

//         if(handNumber == 1){
//             if (!canHit1) {
//                 splitStand(1);
//             }

//             userSum1 += cardNumber(card);
//             user_aceCount1 += checkAce(card);
//             div1.append(cardImg);
            
//             if (reduceAce(userSum1, user_aceCount1) > 21) { //A, J, 8 -> 1 + 10 + 8
//                 let userSum1_Aceless = reduceAce(userSum1, user_aceCount1);
//                 document.getElementById("top_userSum").innerText = userSum1_Aceless + "/" + userSum1;
//                 canHit1 = false;
//                 remove(hit_btn1);
//                 remove(stand_btn1);
//                 return;
//             }
//             userSum1_Aceless = reduceAce(userSum1, user_aceCount1);
//             document.getElementById("top_userSum").innerText = userSum1_Aceless + "/" + userSum1;
//         }
        
//         if(handNumber == 2){
//             if (!canHit2) {
//                 splitStand(2);
//             }

//             userSum2 += cardNumber(card);
//             user_aceCount2 += checkAce(card);
//             div2.append(cardImg);
            
//             let userSum2_Aceless = reduceAce(userSum2, user_aceCount2);

//             if (reduceAce(userSum2, user_aceCount2) > 21) { //A, J, 8 -> 1 + 10 + 8
//                 document.getElementById("bottom_userSum").innerText = userSum2_Aceless + "/" + userSum2;
//                 canHit2 = false;
//                 remove(hit_btn2);
//                 remove(stand_btn2);
//                 splitStand(2);
//                 return;
//             }
//             userSum2_Aceless = reduceAce(userSum2, user_aceCount2);
//             document.getElementById("bottom_userSum").innerText = userSum2_Aceless + "/" + userSum2;
//         }
//     }
  
//     function splitStand(handNumber){
//         // showDealer();
//         console.log(handNumber);
//         this.handNumber = handNumber;
//         console.log(handNumber);
//         dealer_sumAceless = reduceAce(dealerSum, dealer_aceCount);
//         user_sumAceless1 = reduceAce(userSum1, user_aceCount1);
//         user_sumAceless2 = reduceAce(userSum2, user_aceCount2);      
     
//         if(handNumber == 1){
//             if (user_sumAceless1 > 21) {
//                 message1 = "You Lose!";
//             }
//             else if (dealer_sumAceless > 21) {
//                 message1 = "You win!";
//             }
//             else if (user_sumAceless1 == dealer_sumAceless) {
//                 message1 = "Push!";
//             }
//             else if (user_sumAceless1 > dealer_sumAceless) {
//                 message1 = "You Win!";
//             }
//             else if (user_sumAceless1 < dealer_sumAceless) {
//                 message1 = "You Lose!";
//             }

//             document.getElementById("top_userSum").innerText = userSum1;
//             document.getElementById("topResults").innerText = message1;   

//         }   
//         showDealer();

//         if(handNumber == 2){
//             if (user_sumAceless2 > 21) {
//                 message2 = "You Lose!";
//             }
//             else if (dealer_sumAceless > 21) {
//                 message2 = "You win!";
//             }
//             else if (user_sumAceless2 == dealer_sumAceless) {
//                 message2 = "Push!";
//             }
//             else if (user_sumAceless2 > dealer_sumAceless) {
//                 message2 = "You Win!";
//             }
//             else if (user_sumAceless2 < dealer_sumAceless) {
//                 message2 = "You Lose!";
//             }
//             // remove(hit_btn2);
//             // remove(stand_btn2);

//             document.getElementById("bottom_userSum").innerText = user_sumAceless2 + "/" + userSum2;
//             document.getElementById("bottomResults").innerText = message2;    
//         }
//     }
//     startNextRound = document.createElement("button");
//     startNextRound.id = "startRound";
//     startNextRound.textContent = "Retry";
//     startNextRound.style.width = "100px";
//     startNextRound.style.height = "50px";
//     startNextRound.style.backgroundColor = "goldenrod";
//     startNextRound.style.fontSize = "20px";
//     startNextRound.style.color = "black";
//     startNextRound.style.fontWeight = "bold";
//     document.getElementById("buttons").append(startNextRound);

//     startNextRound.addEventListener("click", () =>{
//         window.location.reload();
//     });


//     function showDealer(){
//         dealer_sumAceless = reduceAce(dealerSum, dealer_aceCount);
//         document.getElementById("hidden").src = "./cards/" + hidden + ".png";
//         while(reduceAce(dealerSum, dealer_aceCount) < 17){
//             let cardImg = document.createElement("img");
//             let card = deck.pop();
//             cardImg.src = "./cards/" + card + ".png";
//             dealerSum += cardNumber(card);
//             dealer_aceCount += checkAce(card);
//             dealer_sumAceless += checkAce(card);
//             document.getElementById("dealerCards").append(cardImg);  
//         }     
//         document.getElementById("dealerSum").innerText = dealer_sumAceless + "/" + dealerSum;
//     }  
    
//     hit_btn1.addEventListener("click", () => {     
//         splitHit(1);       
//     });

//     stand_btn1.addEventListener("click", () => {            
//         remove(stand_btn1);
//         remove(hit_btn1);
//         splitStand(1);
//     });

//     hit_btn2.addEventListener("click", () => {            
//         splitHit(2);
//     });
    
//     stand_btn2.addEventListener("click", () => { 
//         remove(stand_btn2)           
//         remove(hit_btn2);
//         splitStand(2);
//     });
    
// }


// function remove(elem){
//     elem.parentNode.removeChild(elem);
// }

// function double(betAmount){

// }


