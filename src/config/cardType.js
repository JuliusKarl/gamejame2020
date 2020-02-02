const targetType = {
    SELF: 0,// increase own tower
    OTHER: 1, // decrease someone elses
    ANY: 2, // increase self OR decrease other (choose one when played)
    NONE: 3 // no target
}

export const cardType = {
    RANDOMISE_TOWERS: {
        targetType: targetType.NONE,
        url: "17"
    },
    SET_ALL_TO_LOWEST: {
        targetType: targetType.NONE,
        url: "15"
    },
    TRADE_TOWER: {
        targetType: targetType.OTHER,
        url: '19'
    },
    UNDO_LAST: {
        targetType: targetType.NONE,
        url: "20"
    },

    ONE_OR_SEVEN: {
        targetType: targetType.OTHER,
        url: "0"
    },
    RESET_TO_15: {
        targetType: targetType.NONE,
        url: "16"
    },
    PEEK_THE_DECK: {
        targetType: targetType.NONE,
        url: "9"
    },

    // Boring + or minus one cards
    PLUS_ONE: {
        targetType: targetType.ANY,
        url: "1"
    },
    PLUS_TWO: {
        targetType: targetType.ANY,
        url: "2"
    },
    PLUS_THREE: {
        targetType: targetType.ANY,
        url: "3"
    },
    PLUS_FOUR: {
        targetType: targetType.ANY,
        url: "4"
    },
    PLUS_FIVE: {
        targetType: targetType.ANY,
        url: "5"
    },

    MINUS_ONE: {
        targetType: targetType.ANY,
        url: "6"
    },
    MINUS_TWO: {
        targetType: targetType.ANY,
        url: "7"
    },
    MINUS_THREE: {
        targetType: targetType.ANY,
        url: "8"
    },
    MINUS_FOUR: {
        targetType: targetType.ANY,
        url: "10"
    },
    MINUS_FIVE: {
        targetType: targetType.ANY,
        url: "11"
    }
}