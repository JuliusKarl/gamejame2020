import { cardType } from '../config/cardType';

let displayCallback;

function setCardPlayedDisplayCallback(f) {
  // f should be a function that expects one parameter, which is the card played, e.g.:
  // {targetType: targetType.NONE, imageUrl: '../cards/SET_ALL_TO_LOWEST.jpg'}
  this.callback = f;
}

function cardPlayedCallback(e) {
  this.callback(e);
}

const player_state = {
  abc123: {
    isHuman: true,
    tower: {
      health: 15,
    },
    hand: [cardType.TRADE_TOWER,
      cardType.SET_ALL_TO_LOWEST,
      cardType.UNDO_LAST,
      cardType.UNDO_LAST,
      cardType.FOUR],
  },

  def654: {
    isHuman: false,
    tower: {
      health: 29,
    },
    hand: [cardType.RESET_TO_15,
      cardType.FIVE,
      cardType.ONE_PLUS_ROUND_COUNT,
      cardType.ONE,
      cardType.UNDO_LAST],
  },

};

export {
  player_state, setCardPlayedDisplayCallback
};
