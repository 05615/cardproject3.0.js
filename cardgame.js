// declaring variables //
let administrator = false
let playing = false
let p1score = []
let p2score = []
let colours = ["red", "yellow", "black"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let player1card =" ";
let player1deck = [];
let player2card =" ";
let player2deck = [];


let details = [["Cameron","Dube"], ["Ash" , "Ketchum"]];

// login system
function login() {
    let username =document.getElementById("username").value;
    let password =document.getElementById("password").value;
    console.log(username + password)
    for(let i = 0;i < 2; i++){
        if (details[i][0] === username){
          if (details[i][1] === password){
              console.log("Login Successful");
              play()
              playing = true
          }
        }
    }
}
// the play function now gets rid of the login therefore the game can be accessed and played
function play() {
    //this command gets rid of the login page off of the display
    document.getElementById("loginform").style.display="none";
}


// clears everything to start //
console.clear();

let deck = [];

for(let i = 0; i < colours.length; i++)
{
    for(let x = 0; x < values.length; x++)
    {
        let card = colours[i] + values[x];
        deck.push(card);
    }
}
function shuffle(deck) {
    // for 31 turns
    // switch the values of two random cards
    for (let i = 0; i < 31; i++)
    {
        let location1 = Math.floor((Math.random() *30));
        let location2 = Math.floor((Math.random() *30));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }

}
shuffle(deck)

// handing out the top card to the players //
for(let i = 0; i < 30; i++){
    if (i%2 === 0){ // player 1s card
        player1deck.push(deck[0]); // adds the card to player 1s deck
        deck.splice(0,1);// removes the card form the main deck
    } else{ // player 2s card
        player2deck.push(deck[0]);// adds the card to player 2s deck
        deck.splice(0,1);// removes the card form the main deck
    }
    console.log(deck);
}

for (let i = 0; i < 15; i++){
    // to determine the winner of that round we have to compare which colour wins
    // red>black
    // if player1s card is red
    player1card = player1deck[i];
    player2card = player2deck[i];
    if (player1card.includes("red")){
        if (player2card.includes("red")){
            if (parseInt(player1card.substring(3,player1card.length)) > parseInt(player2card.substring(3,player2card.length))){ //red2  the 2 is the 3rd character
                //player 1 gets the point
                p1score.push(player1card, player2card);
                player1card = " "; //resetting p1 card
                player2card = " "; //resetting p2 card
            }else {
                p2score.push(player2card, player1card);
                player1card = " "; //resetting p1 card
                player2card = " "; //resetting p2 card
            }
        }else if (player2card.includes("yellow")){
            p2score.push(player2card, player1card);
            player1card = " "; //resetting p1 card
            player2card = " "; //resetting p2 card
        } else{
            p1score.push(player2card, player1card);
            player1card = " "; //resetting p1 card
            player2card = " "; //resetting p2 card
        }
    }else if (player1card.includes("yellow")){
        if (player2card.includes("yellow")){
            if (parseInt(player1card.substring(6,player1card.length)) > parseInt(player2card.substring(6,player2card.length))){ //yellow5 5 is the 6th character
                p1score.push(player1card, player2card);
                player1card = " "; //resetting p1 card
                player2card = " "; //resetting p2 card
            }else {
                p2score.push(player2card, player1card);
                player1card = " "; //resetting p1 card
                player2card = " "; //resetting p2 card
            }
        }else if (player2card.includes("red")){
            p1score.push(player2card, player1card);
            player1card = " "; //resetting p1 card
            player2card = " "; //resetting p2 card
        }else{
            p2score.push(player2card, player1card);
            player1card = " "; //resetting p1 card
            player2card = " "; //resetting p2 card
        }
    }else if (player1card.includes("black")){
        if (player2card.includes("black")){
            if (parseInt(player1card.substring(5,player1card.length)) > parseInt(player2card.substring(5,player2card.length))){ //black9 9 is the 5th character
                p1score.push(player1card, player2card);
                player1card = " "; //resetting p1 card
                player2card = " "; //resetting p2 card
            }else {
                p2score.push(player2card, player1card);
                player1card = " "; //resetting p1 card
                player2card = " "; //resetting p2 card
            }
        }else if(player2card.includes("yellow")){
            p1score.push(player1card, player2card);
            player1card = " "; //resetting p1 card
            player2card = " "; //resetting p2 card
        }else {
            p2score.push(player2card, player1card);
            player1card = " "; //resetting p1 card
            player2card = " "; //resetting p2 card
        }

    }
    // yellow>red
    //black>yellow
    // compares the cards and declares a winner
    // gives both cards to the winner
}
console.log("Player 1s score is " +p1score.length);
console.log("Player 2s score is " +p2score.length);

// if either deck is empty, game over //=-
// player 1 //
if (p1score.length > p2score.length) {
    console.log("Player 1 Wins")
}else {
    console.log("Player 2 Wins")
}
    // game over
