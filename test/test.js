const assert = require('assert');

const Deck = require('../Deck');

describe('Deck', () => {
  let deck = new Deck();
  describe('init', () => {
    it('should contain 52 cards', ()=> {
      assert(deck.cards.length).equal(52);
    });

    it('should have a card in its array', ()=> {
      assert(deck.cards[0].constructor.name).equal('Card');
    });
  });
});