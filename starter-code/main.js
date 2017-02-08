//Game logic
var cards = [],
    cardsInPlay = [],
    currentScore = document.getElementById("currentScore"),
    score = 0,
    reset = document.getElementById("reset");

    cards = ["queen", "king", "queen", "king"];

    createCards = function() {
      for(var i=0, length=cards.length; i<length; i++) {
        var gameBoard = document.getElementById("game-board"),
            newCard = document.createElement("div");
            newCard.className = "card";
            newCard.setAttribute("data-card", cards[i]);
            newCard.addEventListener("click", isTwoCards);
            gameBoard.appendChild(newCard);
          }
        };

        createCards();


        isMatch = function() {
          if (cardsInPlay[0] === cardsInPlay[1]) {
            score += 1;
            alert("You found a match! Your current score is " + score);
            currentScore.innerHTML = score;
          }
          else {
            alert("Sorry, no match. Flip cards back over and then try again.");
          }
        };

        //checks to see if there are cards in play
      function isTwoCards() {
        /* conditional prevents false "found match" message when same card is
        beeing clicked twice and flips card to backside again*/
        if (this.getAttribute('clicked') === 'true') {
          //resets attributes to match styles for back of card
          this.innerHTML = ''
          this.style.backgroundColor = '#FFFF00';
          this.style.border = '1px solid rgb(0,0,0)';
          //sets a clicked = false attribute for clicked card
          this.setAttribute('clicked', 'false');
          // clear cards in play array for your next try
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
        }
      }

      var resetScore = function functionName() {
        score = 0;
        currentScore.innerHTML = score;
      };

      reset.addEventListener("click", resetScore);
