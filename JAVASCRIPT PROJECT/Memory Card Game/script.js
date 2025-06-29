const board = document.getElementById("game-board");
const symbols = ['🍎','🍌','🍇','🍓','🍍','🍉','🥝','🍒'];
let cards = [...symbols, ...symbols]; // duplicate for pairs
let flippedCards = [];
let matchedCount = 0;

// Shuffle the cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(cards);

// Create card elements
cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.dataset.index = index;
  card.innerText = '';
  card.addEventListener('click', handleCardClick);
  board.appendChild(card);
});

function handleCardClick(e) {
  const card = e.target;

  if (card.classList.contains('flipped') || flippedCards.length === 2) return;

  card.innerText = card.dataset.symbol;
  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [first, second] = flippedCards;
    if (first.dataset.symbol === second.dataset.symbol) {
      first.classList.add('matched');
      second.classList.add('matched');
      matchedCount += 2;
      flippedCards = [];

      if (matchedCount === cards.length) {
        setTimeout(() => {
          alert('🎉 You matched all the cards!');
          window.location.reload();
        }, 500);
      }
    } else {
      setTimeout(() => {
        first.innerText = '';
        second.innerText = '';
        first.classList.remove('flipped');
        second.classList.remove('flipped');
        flippedCards = [];
      }, 1000);
    }
  }
}
