/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { cardType } from '../../config/cardType';

let cardPlayedCallback;
let winnerCallback;

const log = [];
const state = {
  human: {
    tower: {
      health: 15,
    },
    hand: Array(6).map(() => drawCard()),
    isHuman: true
  },
  ai1: {
    tower: {
      health: 15,
    },
    hand: Array(6).map(() => drawCard()),
    isHuman: false
  },
  ai2: {
    tower: {
      health: 15,
    },
    hand: Array(6).map(() => drawCard()),
    isHuman: false
  }, ai3: {
    tower: {
      health: 15,
    },
    hand: Array(6).map(() => drawCard()),
    isHuman: false
  }
};

//private functions

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

function checkWinner() {
  return Object.values(state).filter(player => player.tower.health >= 30);
}

function cardEffect(card, target) {
  const functions = {
    RANDOMISE_TOWERS: () => {
      const shuffledTowers = state.map(i => i.tower);
      shuffle(shuffledTowers);
      Object.values(state).map((player, index) => player.tower = shuffledTowers[index]);
      return 0;
    },
    SET_ALL_TO_LOWEST: () => {
      const lowestTower = Math.min(...Object.values(state).map((i) => i.tower.health));
      Object.values(state).map(i => i.tower.health = lowestTower);
    },
    TRADE_TOWER: () => {
      [state[currentPlayer].tower, state[target].tower] = [state[target].tower,
      state[currentPlayer].tower];
    },
    UNDO_LAST: () => {
      const { targetPlayerId, diff } = log[log.length];
      state[targetPlayerId].tower.health = -1 * diff;
    },

  };

  const diff = functions[card]();
  logEvent(e.currentPlayer, e.target, e.card, diff);

  checkWinner();
}

function aiCard(aiList) {
  const [current, ...tail] = aiList;
  let pickCard = current[1].hand[Math.floor(Math.random() * 6)];

  const SELF = 0 // increase own tower
  const OTHER = 1 // decrease someone elses
  const ANY = 2 // increase self OR decrease other (choose one when played)
  const NONE = 3 // no target

  let targetPlayerId;
  switch (cardType[pickCard].targetType) {
    case SELF:
      targetPlayerId = null;
    case NONE:
      targetPlayerId = null;
    case ANY:
      targetPlayerId = Object.keys(state)[Math.floor(Math.random() * Object.keys(state).length)]
    case OTHER:
      targetPlayerId = Object.keys(state).filter(i => i !== current[0])[Math.floor(Math.random() * Object.keys(state).length - 1)]
  }
  if (tail.length === 0) {
    cardEffect(pickCard, targetPlayerId);
    cardPlayedCallback(cardType[pickCard])
  } else {
    setTimeout(() => {
      cardPlayedCallback(cardType[pickCard]);
      cardEffect(pickCard, targetPlayerId);
      aiCard(tail);
    }, 1000)
  }
}

//exported functions
function playCard(e) {
  //player action
  cardEffect(e.card);

  //ai actions
  aiCard(Object.entries(state).filter(i => !i.isHuman));
}

function drawCard() {
  const typeArray = Object.entries(cardType);
  return Object.fromEntries(typeArray[Math.floor(Math.random * typeArray.length)]);
}

export {
  state,
  cardPlayedCallback,
  winnerCallback,
  playCard,
};
