module.exports = class Card {
  constructor(suite,rank) {
    this.suite = suite;
    this.rank = rank;

    this.lookup = {
      '10':'T',
      '11':'J',
      '12':'Q',
      '13':'K',
      '14':'A',
    }
  }
  print() {
    if(this.lookup[this.rank]){
      return this.lookup[this.rank] + ' ' +this.suite;
    }
    else {
      return this.rank + ' ' + this.suite;
    }
    
  }
}

