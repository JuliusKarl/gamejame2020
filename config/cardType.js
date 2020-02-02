/* eslint-disable no-undef */
const targetType = {
  SELF: 0, // increase own tower
  OTHER: 1, // decrease someone elses
  ANY: 2, // increase self OR decrease other (choose one when played)
  NONE: 3, // no target
};

const cardType = {
  RANDOMISE_TOWERS: {
    targetType: targetType.NONE,
  },
  SET_ALL_TO_LOWEST: {
    targetType: targetType.NONE,
  },
  TRADE_TOWER: {
    targetType: targetType.OTHER,
  },
  UNDO_LAST: {
    targetType: targetType.NONE,
  },

  // Too difficult for now, get to later
  // DISCARD_AND_DECREASE,
  // DRAW_2,
  // PLAY_2_THEN_SKIP,
  ONE_OR_SEVEN: {
    targetType: targetType.OTHER,
    imageUrl: './dummy.jpg',
  },
  RESET_TO_15: {
    targetType: targetType.NONE,
  },
  ONE_PLUS_ROUND_COUNT: {
    targetType: targetType.ANY,
  },
  PEEK_THE_DECK: {
    targetType: targetType.NONE,
  },

  // Boring + or minus one cards
  ONE: {
    targetType: targetType.ANY,
  },
  TWO: {
    targetType: targetType.ANY,
  },
  THREE: {
    targetType: targetType.ANY,
  },
  FOUR: {
    targetType: targetType.ANY,
  },
  FIVE: {
    targetType: targetType.ANY,
  },
};

// eslint-disable-next-line import/prefer-default-export
export { cardType };
