/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { cardType } from '../../config/cardType';

let displayCallback;
let currentPlayer;
const log = [];
const state = {};

function logEvent(playerId, targetPlayerId, card, diff) {
  log.push({
    playerId, targetPlayerId, card, diff,
  });
}
function shuffle(a) {
  // eslint-disable-next-line no-plusplus
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// exported
function startGame() {
  [currentPlayer] = Object.keys(state); // set first player as taking first turn
}


function playCard(e) {
  const functions = {
    RANDOMISE_TOWERS: () => {
      const shuffledTowers = state.map((i) => i.tower);
      shuffle(shuffledTowers);
      Object.values(state).map((player, index) => player.tower = shuffledTowers[index]);
      return 0;
    },
    SET_ALL_TO_LOWEST: () => {
      const lowestTower = Math.min(...Object.values(state).map((i) => i.tower.health));
      Object.values(state).map((i) => i.tower.health = lowestTower);
    },
    TRADE_TOWER: () => {
      [state[currentPlayer].tower, state[e.target].tower] = [state[e.target].tower,
        state[currentPlayer].tower];
    },
    UNDO_LAST: () => {
      const { targetPlayerId, diff } = log[log.length];
      state[targetPlayerId].tower.health = -1 * diff;
    },

  };

  const diff = functions[e.card]();
  logEvent(e.currentPlayer, e.target, e.card, diff);
}

function cardPlayedCallback(e) {
  // Callback to be passed
  displayCallback(e);
}

function drawCard() {
  const typeArray = Object.entries(cardType);
  return Object.fromEntries(typeArray[Math.floor(Math.random * typeArray.length)]);
}

function addPlayer(playerId) {
  const playerObject = {
    tower: {
      health: 15,
    },
    hand: Array(6).map(() => drawCard()),
  };

  state[playerId] = playerObject;
}

function setCardPlayedDisplayCallback(f) {
  // f should be a function that expects one parameter, which is the card played, e.g.:
  // {targetType: targetType.NONE, imageUrl: '../cards/SET_ALL_TO_LOWEST.jpg'}
  this.callback = f;
}

export {
  state,
  setCardPlayedDisplayCallback,
  drawCard,
  addPlayer,
  cardPlayedCallback,
  playCard,
};
