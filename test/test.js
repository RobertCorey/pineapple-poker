const assert = require('assert');

const Deck = require('../Deck');

describe('Deck', () => {
  let deck = new Deck();
  describe('init', () => {
    it('should contain 52 cards', ()=> {
      assert.equal(deck.cards.length, 52);
    });

    it('should have a card in its array', ()=> {
      assert.equal(deck.cards[0].constructor.name, 'Card');
    });
  });
});