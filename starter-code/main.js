console.log("JS file is connected to HTML! Woo!")

var cards = [],
    cardsInPlay = [];

    cards = ["queen", "queen", "king", "king"];

    createCards = function() {
      for(var i=0, length=cards.length; i<length; i++) {
        var gameBoard = document.getElementById("game-board"),
            newCard = document.createElement("div");
            newCard.className = "card";
            newCard.setAttribute("data-card", cards[i]);
            newCard.addEventListener("click", isTwoCards);
            gameBoard.appendChild(newCard);
            console.log(newCard);

          //  var cardElement = gameBoard.querySelectorAll('div');
            // console.log(cardElement);
            //cardElement.addEventListener("click", isTwoCards);
          }
        };

        createCards();

        isMatch = function() {
          if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
          }
          else {
            alert("Sorry, try again.");
          }
        };

        //checks to see if there are cards in play
      function isTwoCards() {
        // add card to array of cards in play
        // 'this' hasn't been covered in this pre-work, but
        // for now, just know it gives you access to the card the user clicked on
        cardsInPlay.push(this.getAttribute('data-card'));

        // if you have two cards in play, check for a match
        if (cardsInPlay.length === 2) {

          // pass the cardsInPlay as an argument to the isMatch function
          isMatch(cardsInPlay);

          // clear cards in play array for your next try
          cardsInPlay = [];
        }

        if (this.getAttribute('data-card') == 'king') {
          this.innerHTML = '<img src="spades-884197_640.png" alt="King of Spades" />'
          this.style.backgroundColor = 'transparent';
          this.style.border = '0';
        }
        else {
          this.innerHTML = '<img src="hearts-884201_640.png" alt="Queen of Hearts" />'
          this.style.backgroundColor = 'transparent';
          this.style.border = '0';
        }
      }



/* testing for equality:
- get value of first card
- get value of second card
- compare both cards
- if 1st card == 2nd card => match
- if 1st card != 2nd card => no match

       - comparing cardOne and cardTwo
       - both have the value "queen"
       --> this should produce 'true'
    console.log(cardOne == cardTwo);

    - comparing cardOne and cardThree
       - cardOne = "queen", cardThree = "king"
       --> this should produce 'false'
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
*/
