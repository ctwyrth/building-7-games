const cardArray = [
   { name: 'fries', img: './images/fries.png'},
   { name: 'cheeseburger', img: './images/cheeseburger.png'},
   { name: 'hotdog', img: './images/hotdog.png'},
   { name: 'icecream', img: './images/ice-cream.png'},
   { name: 'milkshake', img: './images/milkshake.png'},
   { name: 'pizza', img: './images/pizza.png'},
   { name: 'fries', img: './images/fries.png'},
   { name: 'cheeseburger', img: './images/cheeseburger.png'},
   { name: 'hotdog', img: './images/hotdog.png'},
   { name: 'icecream', img: './images/ice-cream.png'},
   { name: 'milkshake', img: './images/milkshake.png'},
   { name: 'pizza', img: './images/pizza.png'},
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');

const createBoard = () => {
   cardArray.forEach((card, i) => {
      const cardDisplay = document.createElement('img');
      cardDisplay.setAttribute('src', './images/blank.png');
      cardDisplay.setAttribute('id', i);
      cardDisplay.setAttribute('class', 'card');
      grid.append(cardDisplay);
   });
}

createBoard();