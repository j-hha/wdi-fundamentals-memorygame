//Game logic
var cards = [],
    cardsInPlay = [],
    currentScore = document.getElementById("currentScore"),
    score = 0,
    reset = document.getElementById("reset"),
    gameBoard = document.getElementById("game-board");

    cards = ["queen", "king", "queen", "king"];

//creates cards on gameBoard
    createCards = function() {
      //for reset button: this resets gameboard and score
      gameBoard.innerHTML = "";
      score = 0;
      currentScore.innerHTML = score;
      //creates cards on gameBoard
      for(var i=0, length=cards.length; i<length; i++) {
        var newCard = document.createElement("div");
            newCard.className = "card";
            newCard.setAttribute("data-card", cards[i]);
            newCard.addEventListener("click", isTwoCards);
            gameBoard.appendChild(newCard);
          }
        };

        createCards();

        //compares two cards
        isMatch = function() {
          // if clicked cards have the same value corresponding alert message
          // is displayed and score is updated
          if (cardsInPlay[0] === cardsInPlay[1]) {
            score += 1;
            alert("You found a match! Your current score is " + score);
            currentScore.innerHTML = score;
          }
          // else: clicked cards do not have the same value & corresponding alert
          // message is displayed
          else {
            alert("Sorry, no match. Flip cards back over and then try again.");
          }

          /*To reset all cards automatically after isMatch() has run - BUT:
          I decided to use a different version (cards have to be turned
          over 'manually' by clicking) since this would prevent the
          second card from being displayed by the alert box:

          allCards = document.getElementsByClassName('card');
          for(j=0; j<allCards.length; j++) {
            //resets attributes to match styles for back of card
            allCards[j].innerHTML = ''
            allCards[j].style.backgroundColor = '#FFFF00';
            allCards[j].style.border = '1px solid rgb(0,0,0)';
            allCards[j].setAttribute('clicked', 'false');
          }*/
        };


        //checks to see if there are cards in play
      function isTwoCards() {
        //Checks value of card, displays corresponding pic and clears styles for back of card)
        if (this.getAttribute('data-card') === 'king') {
          this.innerHTML = '<img src="spades-884197_640.png" alt="King of Spades" />'
          this.style.backgroundColor = 'transparent';
          this.style.border = '0';
        }
        else {
          this.innerHTML = '<img src="hearts-884201_640.png" alt="Queen of Hearts" />'
          this.style.backgroundColor = 'transparent';
          this.style.border = '0';
        }
        /* conditional prevents false "found match" message when same card is
        beeing clicked twice in a row and instead flips card to backside again */
        if (this.getAttribute('clicked') === 'true') {
          // would be used in combination with the automatical reset version:
          // return;
          //resets attributes to match styles for back of card
          this.setAttribute('clicked', 'false');
          this.innerHTML = '';
          this.style.backgroundColor = '#FFFF00';
          this.style.border = '1px solid rgb(0,0,0)';
          cardsInPlay = [];
        }

        else {
          //sets a clicked = true attribute for clicked card
          this.setAttribute('clicked', 'true');
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
        }
      }

      //resets whole gameBoard and score tally

      reset.addEventListener("click", createCards);
