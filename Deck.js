let Card = require('./Card');

module.exports = class Deck {
    constructor(){
        this.cards = []

        let suites = ["d","c","h","s"];
        for(let i = 0; i < 4 ; i++){
            for(let j=2 ; j<15 ; j++){

                let card1 = new Card(this.cards[i],j);
                this.cards.push(card1);
                
            }
        }

        
    }


}