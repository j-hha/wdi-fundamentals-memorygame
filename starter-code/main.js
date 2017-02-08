// console.log("JS file is connected to HTML! Woo!")

//Game logic

var cards = [],
    cardsInPlay = [],
    currentScore = document.getElementById("currentScore"),
    score = 0;

    cards = ["queen", "king", "queen", "king"];

    createCards = function() {
      for(var i=0, length=cards.length; i<length; i++) {
        var gameBoard = document.getElementById("game-board"),
            newCard = document.createElement("div");
            newCard.className = "card";
            newCard.setAttribute("data-card", cards[i]);
            newCard.addEventListener("click", isTwoCards);
            gameBoard.appendChild(newCard);
            console.log(newCard);
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
            alert("Sorry, try again.");
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



      // JavaScript only (no JQuery!): Color effect on selected menu element

var activateElement = function(element) {
  // initialize variable for empty array named navElements
  var navElements = [],
      content = [],
      test = 0;

  //grab all elements with the class navElements and store them in var navElements
  navElements = document.getElementsByClassName("navElements");
  content = document.getElementsByClassName("content");

  // loop over array
  for (var i = 0, length = navElements.length; i < length; i++) {
    // check if an element in the array has the class name 'selected'
    if (navElements[i].getAttribute("class") === "navElements selected") {
      // change class to just "navElements" --> unselect
      navElements[i].setAttribute("class", "navElements");
    }
  }

  // change class of clicked element to "navElements selected" --> select
  element.setAttribute("class", "navElements selected");

  // loop over array to make respective content visible
  for (var j = 0, length = navElements.length; j < length; j++) {
    // check if an element in the array has the class name 'selected'
    if (navElements[j].getAttribute("class") === "navElements selected") {
      // if so, match index of this nav element to content element of same index
      // and set this content element to visible
      content[j].setAttribute("class", "content visible");
    }
    // else set to not visible
    else {
      content[j].setAttribute("class", "content");
    }
  }
};
