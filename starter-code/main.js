console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen",
    cardTwo = "queen",
    cardThree = "king",
    cardFour = "king";

/* testing for equality:
- get value of first card
- get value of second card
- compare both cards
- if 1st card == 2nd card => match
- if 1st card != 2nd card => no match

       - comparing cardOne and cardTwo
       - both have the value "queen"
       --> this should produce 'true' */
    console.log(cardOne == cardTwo);

    /* - comparing cardOne and cardThree
       - cardOne = "queen", cardThree = "king"
       --> this should produce 'false' */
    console.log(cardOne == cardThree);

    if (cardOne === cardFour) {
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }

    if (cardOne === cardTwo) {
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }
