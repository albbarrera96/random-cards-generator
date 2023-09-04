function getRandomValueFromArray(array) {

  if (array.length === 0) {
    return undefined; 
  }

  const random_index = Math.floor(Math.random() * array.length);

  return array[random_index];
}

const deck = [
    '❤️A', '❤️2', '❤️3', '❤️4', '❤️5', '❤️6', '❤️7', '❤️8', '❤️9', '❤️10', '❤️J', '❤️Q', '❤️K',
    '♦️A', '♦️2', '♦️3', '♦️4', '♦️5', '♦️6', '♦️7', '♦️8', '♦️9', '♦️10', '♦️J', '♦️Q', '♦️K',
    '♣️A', '♣️2', '♣️3', '♣️4', '♣️5', '♣️6', '♣️7', '♣️8', '♣️9', '♣️10', '♣️J', '♣️Q', '♣️K',
    '♠️A', '♠️2', '♠️3', '♠️4', '♠️5', '♠️6', '♠️7', '♠️8', '♠️9', '♠️10', '♠️J', '♠️Q', '♠️K'
];

const p1 = [];
const p2 = [];
const p3 = [];
const p4 = [];

function getCards(player, n) {
    for (let i = 0; i < n; i++) {
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

getCards(p1,7);
getCards(p2,7);
getCards(p3,7);
getCards(p4,7);