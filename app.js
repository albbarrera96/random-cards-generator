function getRandomValueFromArray(array) {

  if (array.length === 0) {
    return undefined; 
  }

  const random_index = Math.floor(Math.random() * array.length);

  return array[random_index];
}

const deck = [
    'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13',
    'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13',
    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13',
    'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10' ,'D11', 'D12', 'D13'
];

const p1 = [];
const p2 = [];
const p3 = [];
const p4 = [];


function getCards(player) {
    for (let i = 0; i < 7; i++) {
        let random_value = getRandomValueFromArray(deck);
        if (player.includes(random_value)) {
            i--;
        } else {
            player.push(random_value);
            deck.splice(deck.indexOf(random_value), 1);
        }
    }
    console.log(player);
};

getCards(p1);
getCards(p2);
getCards(p3);
getCards(p4);





