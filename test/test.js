const assert = require('assert');

const Deck = require('../Deck');

describe('Deck', () => {
  let deck = new Deck();
  beforeEach(() => {
    deck.makePristine();
  });
  

  describe('init', () => {
    it('should contain 52 cards', ()=> {
      assert.equal(deck.cards.length, 52);
    });

    it('should have a card in its array', ()=> {
      assert.equal(deck.cards[0].constructor.name, 'Card');
    });
  });

  describe('dealCard', () => {
    it('should remove card from deck', () => {
      deck.dealCard();
      assert.equal(deck.cards.length, 51);
    });

    it('should have a card in its array', ()=> {
      let card = deck.dealCard();
      assert.equal(card.constructor.name, 'Card');
    });

  });
});