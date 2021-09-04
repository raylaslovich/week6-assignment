//create name of players
//

class Player {
    constructor (name) {
        this.playerName = name;
        this.playerCards = [];
    }
}
// create a single card for the deck. 
class Card {
    constructor (suit, rank, value) {
        this.suit = suit
        this.rank = rank
        this.value = value
    }
}

class WarGame {
    constructor () {
        this.cardsInMiddle = [];
        this.players = [];
    }

    //start the game by splitting the deck in two, each half for the 2 players.
    start (playerOneName, playerTwoName) {
        this.players.push (new Player(playerOneName));
        this.players.push (new Player(playerTwoName));
        let d = new Deck()
        d.createDeck();
        d.shuffleDeck(); 
        this.players[0].playerCard = d.cards.slice(0,26);
        this.players[1].playerCard = d.cards.slice(26,52);
    }
}


class Deck {
    constructor () {
        this.cards = []
    }

    //create deck of 52 cards.
    createDeck () { 
        let suits = ['clubs','hearts','diamonds','spades']
        let rank = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king']
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                this.cards.push(new Card (suits[i], rank[j], values[j]));
            }
        }

    }

    //shuffle the deck.
    shuffleDeck() {
        let location1, location2, temp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            temp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = temp; //swap cards
         
        }
    }

    //function to compare current card for players
    //push current cards to back of each hand?
    //remove card from front of each deck?
    compareDeck() {
        let playerOneCard = this.players[0].playerCard
        let playerTwoCard = this.players[1].playerCard

        if (playerOneCard.value > playerTwoCard.value) {
            
            
        }

        if (playerOneCard.value < playerTwoCard.value) {


        }
    
    }

}








let game = new WarGame(); //create a new game
game.start('PlayerOne','PlayerTwo'); // call on start() function.
console.log(game.players); // log the players array
const deck = new Deck(); //create a new deck
deck.createDeck(); // call on createDeck() function. 
// console.log(deck.cards); //log the cards array. 



