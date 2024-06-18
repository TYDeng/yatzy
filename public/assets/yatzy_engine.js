function calScore(game, scoreBox) {
    const diceVal = game.diceVal;
    let score = 0;

    switch (scoreBox) {
        case 'one':
            score = specificNum(diceValues, 1);
            break;
        case 'two':
            score = specificNum(diceValues, 2);
            break;
        case 'three':
            score = specificNum(diceValues, 3);
            break;
        case 'four':
            score = specificNum(diceValues, 4);
            break;
        case 'five':
            score = specificNum(diceValues, 5);
            break;    
        case 'six':
            score = specificNum(diceValues, 6);
            break;
        // Add cases for other score boxes (e.g., 'threes', 'fours', etc.)
        // You can define helper functions for each specific score calculation if needed
        default:
            score = 0;
            break;
    }

    return score;
}

//Calculate the sum of a specific number in dice values
function specificNum(diceValues, number) {
    return diceValues.reduce((sum, value) => value === number ? sum + number : sum, 0);
}