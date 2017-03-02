//Game logic
var cards = ['queen', 'king', 'queen', 'king'],
    cardsInPlay = [],
    tallyElement = document.getElementById('tallyElement'),
    score = 0,
    resetButton = document.getElementById('resetButton'),
    gameBoard = document.getElementById('game-board'),
    //This function shuffles the items in the cards array --> cards are rearranged
    //every time the user hits reset
    shuffleArray = function(original) {
      // empty array to push items from ordered array into in random order
      shuffled = [];
      // loops over array for the length of the array to be shuffled
      for (var i = original.length; i > 0; i--) {
        // creates a random whole number between 0 and the numeric value of the current
        // last index of the array (changes since items are constantly being sliced out)
        var randomNumber = Math.round(Math.random() * (original.length-1));
        // pushes item at the index of randomly created number into empty array
        shuffled.push(original[randomNumber]);
        // removes item at the index of randomly created number from old array
        original.splice(randomNumber, 1);
      }
      return shuffled;
    };

//creates cards on gameBoard
var createCards = function() {
  //this function is also used to reset the gameBoard and score
  //when the resetButton is clicked
  gameBoard.innerHTML = '';
  score = 0;
  tallyElement.innerHTML = score;

  cards = shuffleArray(cards);


  //creates cards on gameBoard
  for(var i=0, length=cards.length; i<length; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
    gameBoard.appendChild(newCard);
  }
};

//compares two cards
 var isMatch = function() {
   // if clicked cards have the same value corresponding alert message
   // is displayed and score is updated
   if (cardsInPlay[0] === cardsInPlay[1]) {
     score += 1;
     tallyElement.innerHTML = score;
     setTimeout(function(){
       alert('You found a match! Your current score is ' + score);
     }, 300);
   }
   // else: clicked cards do not have the same value & corresponding alert
   // message is displayed
   else {
     setTimeout(function() {
       alert('Sorry, no match.');
     }, 300);
   }

      setTimeout(function() {
        var allCards = document.getElementsByClassName('card');
        for(j=0; j<allCards.length; j++) {
          //resets attributes to match styles for back of card
          allCards[j].innerHTML = '';
          allCards[j].className = 'card';
          allCards[j].setAttribute('clicked', 'false');
        }
      }, 300);
    };


    //checks to see if there are cards in play
    var isTwoCards = function() {
      //Checks value of card, displays corresponding pic)
      if(this.getAttribute('data-card') === 'king') {
        this.innerHTML = '<img src="spades-884197_640.png" alt="King of Spades" />'
        this.className = 'card front';
      }
      else {
        this.innerHTML = '<img src="hearts-884201_640.png" alt="Queen of Hearts" />'
        this.className = 'card front';
      }

      /* conditional prevents false 'found match' message when same card is
      being clicked twice in a row and instead flips card to backside again */
      if (this.getAttribute('clicked') === 'true') {
        //resets attributes to match styles for back of card
        this.setAttribute('clicked', 'false');
        this.innerHTML = '';
        this.className = 'card';
        // removes last card from cardsInPlay for new try
        cardsInPlay.pop();
      }

      else {
        //sets clicked = true attribute for clicked card
        this.setAttribute('clicked', 'true');
        // add card to array of cards in play
        // 'this' hasn't been covered in this pre-work, but
        // for now, just know it gives you access to the card the user clicked on
        cardsInPlay.push(this.getAttribute('data-card'));
        // if you have two cards in play, check for a match
        if (cardsInPlay.length === 2) {
          // pass the cardsInPlay as an argument to the isMatch function
          isMatch(cardsInPlay);
          // clear cards in play array for next try
          cardsInPlay = [];
        }
      }
    };

    // calls the function creating the cards on gameBoard
    createCards();

    //resets whole gameBoard and score tally
    resetButton.addEventListener('click', createCards);
