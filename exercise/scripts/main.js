window.addEventListener('DOMContentLoaded', function() {
  // Part 1: Ensure that the user can play the game.
  const cards = document.querySelectorAll('.card');

  let selectedCards = [];
  let matchedCards = [];
  let cardValues = [];

  cards.forEach(function(card, index) {
    card.addEventListener('click', function () {

      const cardValue = card.lastElementChild.textContent;

      if (card.classList.contains('is-selected')) {
        return;
      }

      if (selectedCards.length < 2) {
        card.classList.add('is-selected');
        selectedCards.push(card);
        cardValues.push(cardValue);
      }



      if (selectedCards.length === 2 ) {

        const card1 = selectedCards[0];
        const card2 = selectedCards[1];

        if (cardValues[0] === cardValues[1]) {
          matchedCards.push(card1, card2);
        } else {
          card1.classList.remove('is-selected')
          card2.classList.remove('is-selected')
        }

        selectedCards = [];
        cardValues = [];

      }

      if (matchedCards.length === cards.length) {
        alert('You matched all the cards, nice job!');
      }

    })
  })
})


