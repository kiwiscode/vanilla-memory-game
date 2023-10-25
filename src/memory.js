class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards) {
      return undefined;
    }
    // SOLUTION
    // for (let i = 0; i < this.cards.length; i++) {
    //   let shuffle = Math.floor(Math.random() * this.cards.length);

    //   let temp = this.cards[i];
    //   this.cards[i] = this.cards[shuffle];
    //   this.cards[shuffle] = temp;
    // }

    // SOLUTION => Omar's solution

    // const shuffledArray = [];
    // while (this.cards.length > 1) {
    //   const randomIndex = Math.floor(Math.random() * this.cards.length);
    //   const item = this.cards.splice(randomIndex, 1);
    //   shuffledArray.push(item);
    //   this.cards = shuffledArray;
    // }

    // SOLUTION

    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here

    // SOLUTION
    const totalPairs = this.cards.length / 2;
    if (this.pairsGuessed === totalPairs) {
      return true;
    } else {
      return false;
    }
  }

  // SOLUTION
  //   if (
  //     this.cards === this.cards &&
  //     this.pickedCards.length === 0 &&
  //     this.pairsClicked === 0 &&
  //     this.pairsGuessed === 0
  //   ) {
  //     return false;
  //   }
  //   // if (this.pairsGuessed === this.cards.length / 2) {
  //   if (this.pairsGuessed === this.cards.length / 2) {
  //     console.log("YOU FINISH THE GAME");
  //     console.log(this.cards.length);
  //     return true;
  //   }
  //   return false;
  // }
}
