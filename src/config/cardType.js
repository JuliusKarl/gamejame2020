const targetType = {
    SELF: 0,// increase own tower
    OTHER: 1, // decrease someone elses
    ANY: 2, // increase self OR decrease other (choose one when played)
    NONE: 3 // no target
}

export const cardType = {
    RANDOMISE_TOWERS: {
        targetType: targetType.NONE,
        url: "./assets/Cards/17.png"
    },
    SET_ALL_TO_LOWEST: {
        targetType: targetType.NONE,
        url: "./assets/Cards/15.png"
    },
    TRADE_TOWER: {
        targetType: targetType.OTHER,
        url: "./assets/Cards/19.png"
    },
    UNDO_LAST: {
        targetType: targetType.NONE,
        url: "./assets/Cards/20.png"
    },

    ONE_OR_SEVEN: {
        targetType: targetType.OTHER,
        url: "./assets/Cards/0.png"
    },
    RESET_TO_15: {
        targetType: targetType.NONE,
        url: "./assets/Cards/16.png"
    },
    PEEK_THE_DECK: {
        targetType: targetType.NONE,
        url: "./assets/Cards/9.png"
    },

    // Boring + or minus one cards
    PLUS_ONE: {
        targetType: targetType.ANY,
        url: "./assets/Cards/1.png"
    },
    PLUS_TWO: {
        targetType: targetType.ANY,
        url: "./assets/Cards/2.png"
    },
    PLUS_THREE: {
        targetType: targetType.ANY,
        url: "./assets/Cards/3.png"
    },
    PLUS_FOUR: {
        targetType: targetType.ANY,
        url: "./assets/Cards/4.png"
    },
    PLUS_FIVE: {
        targetType: targetType.ANY,
        url: "./assets/Cards/5.png"
    },

    MINUS_ONE: {
        targetType: targetType.ANY,
        url: "./assets/Cards/6.png"
    },
    MINUS_TWO: {
        targetType: targetType.ANY,
        url: "./assets/Cards/7.png"
    },
    MINUS_THREE: {
        targetType: targetType.ANY,
        url: "./assets/Cards/8.png"
    },
    MINUS_FOUR: {
        targetType: targetType.ANY,
        url: "./assets/Cards/10.png"
    },
    MINUS_FIVE: {
        targetType: targetType.ANY,
        url: "./assets/Cards/11.png"
    }
}
