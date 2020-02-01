const targetType = {
    SELF, // increase own tower
    OTHER, // decrease someone elses
    ANY, // increase self OR decrease other (choose one when played)
    NONE // no target
}

export const cardType = {
    RANDOMISE_TOWERS: {
        targetType: targetType.NONE
    },
    SET_ALL_TO_LOWEST: {
        targetType: targetType.NONE
    },
    TRADE_TOWER: {
        targetType: targetType.OTHER
    },
    UNDO_LAST: {
        targetType: targetType.NONE
    },

    // Too difficult for now, get to later
    // DISCARD_AND_DECREASE,
    // DRAW_2,
    // PLAY_2_THEN_SKIP,
    ONE_OR_SEVEN: {
        targetType: targetType.OTHER
    },
    RESET_TO_15: {
        targetType: targetType.NONE
    },
    ONE_PLUS_ROUND_COUNT: {
        targetType: targetType.ANY
    },
    PEEK_THE_DECK: {
        targetType: targetType.NONE
    },

    // Boring + or minus one cards
    ONE: {
        targetType: targetType.ANY
    },
    TWO: {
        targetType: targetType.ANY
    },
    THREE: {
        targetType: targetType.ANY
    },
    FOUR: {
        targetType: targetType.ANY
    },
    FIVE: {
        targetType: targetType.ANY
    }

}
