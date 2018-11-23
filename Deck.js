let Card = require('./Card');

module.exports = class Deck {
  constructor(){
    this.makePristine();
    
  }
  makePristine(){
    this.cards = [];
    let suites = ['d','c','h','s'];
    for(let i = 0; i < 4 ; i++){
      for(let j=2 ; j<15 ; j++){
        
        let card1 = new Card(suites[i],j);
        this.cards.push(card1);
        
      }
    }
  }
  dealCard(){
    return this.cards.pop();
  }
};