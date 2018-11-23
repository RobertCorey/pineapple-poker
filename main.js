let Card = require('./Card');
const lodash = require('lodash');
let foo = lodash.add(10,12);

let card1 = new Card("d",3);
let card2 = new Card("j",11);

console.log(card1.print());
console.log(card2.print());