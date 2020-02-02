/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { cardType } from '../config/cardType';
let cardPlayedCallback;
let winnerCallback;

const log = [];
const state = {
  human: {
    tower: {
      health: 15,
    },
    hand: [drawCard(), drawCard(), drawCard(), drawCard(), drawCard(), drawCard()],
    isHuman: true
  },
  ai1: {
    tower: {
      health: 15,
    },
    hand: [drawCard(), drawCard(), drawCard(), drawCard(), drawCard(), drawCard()],
    isHuman: false
  },
  ai2: {
    tower: {
      health: 15,
    },
    hand: [drawCard(), drawCard(), drawCard(), drawCard(), drawCard(), drawCard()],
    isHuman: false
  }, ai3: {
    tower: {
      health: 15,
    },
    hand: [drawCard(), drawCard(), drawCard(), drawCard(), drawCard(), drawCard()],
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
  const winner = Object.values(state).filter(player => player.tower.health >= 30)
  if (winner.length > 0 && winner[0].isHuman) {
    winnerCallback(true)
  }
  else if (winner.length > 0 && !winner[0].isHuman) {
    winnerCallback(false)
  }
}

function cardEffect(playerId, card, target) {
  const functions = {
    RANDOMISE_TOWERS: () => {
      const shuffledTowers = Object.entries(state).map(i => i.tower);
      shuffle(shuffledTowers);
      Object.values(state).map((player, index) => player.tower = shuffledTowers[index]);
      return 0;
    },
    RESET_TO_15: () => {
      Object.values(state).forEach(i => i.tower.health = 15)
    },
    SET_ALL_TO_LOWEST: () => {
      const lowestTower = Math.min(...Object.values(state).map((i) => i.tower.health));
      Object.values(state).map(i => i.tower.health = lowestTower);
    },
    TRADE_TOWER: () => {
      [state[playerId].tower, state[target].tower] = [state[target].tower,
      state[playerId].tower];
    },
    UNDO_LAST: () => {
      const { target, diff } = log[log.length];
      state[target].tower.health = -1 * diff;
    },
    ONE_PLUS_ROUND_COUNT: () => {
      const diff = log.length % Object.entries(state).length
      if (target === playerId) {
        state[target].tower.health += diff;
        return diff
      } else {
        state[target].tower.health -= diff;
        return -1 * diff
      }
    },
    ONE_OR_SEVEN: () => {
      const sum_diff = log.slice(log.length - 4, log.length).reduce((acc, i) => acc + i.diff)
      if (sum_diff >= 7) {
        if (target === playerId) {
          state[target].tower.health += 7;
          return 7
        } else {
          state[target].tower.health -= 7;
          return -7
        }
      } else {
        if (target === playerId) {
          state[target].tower.health += 1;
          return 1
        } else {
          state[target].tower.health -= 1;
          return -1
        }
      }
    },
    ONE: () => {
      if (target === playerId) {
        state[target].tower.health += 1;
        return 1
      } else {
        state[target].tower.health -= 1;
        return -1
      }
    },
    TWO: () => {
      if (target === playerId) {
        state[target].tower.health += 2;
        return 2
      } else {
        state[target].tower.health -= 2;
        return -2
      }
    },
    THREE: () => {
      if (target === playerId) {
        state[target].tower.health += 3;
        return 3
      } else {
        state[target].tower.health -= 3;
        return -3
      }
    }, FOUR: () => {
      if (target === playerId) {
        state[target].tower.health += 4;
        return 4
      } else {
        state[target].tower.health -= 4;
        return -4
      }
    },
  };

  const diff = functions[card]();
  logEvent(playerId, target, card, diff);

  checkWinner();
}

function aiCard(aiList) {
  // eslint-disable no-undef
  const cardType = _config_cardType__WEBPACK_IMPORTED_MODULE_0__.cardType
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
    cardEffect(current[0], pickCard, targetPlayerId);
    cardPlayedCallback(cardType[pickCard])
  } else {
    setTimeout(() => {
      cardPlayedCallback(cardType[pickCard]);
      cardEffect(current[0], pickCard, targetPlayerId);
      aiCard(tail);
    }, 1000)
  }
}

//exported functions
function playCard(card, target) {
  //player action
  cardEffect("human", card, target);

  //ai actions
  aiCard(Object.entries(state).filter(i => !i.isHuman));
}

function drawCard() {
  const typeArray = Object.entries(cardType);
  console.log(typeArray);
  console.log(typeArray[Math.floor(Math.random() * typeArray.length)]);
  return typeArray[Math.floor(Math.random() * typeArray.length)][0];
}

function setCardPlayedCallback(f) {
  cardPlayedCallback = f
}

function setWinnerCallback(f) {
  winnerCallback = f
}

export {
  state,
  setCardPlayedCallback,
  setWinnerCallback,
  playCard,
};
