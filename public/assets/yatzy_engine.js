function calScore(game, scoreBox) {
    const diceVal = game.diceVal;
    let score = 0;

    switch (scoreBox) {
        //Upper section
        case 'Ones':
            score = specificNum(diceValues, 1);
            break;
        case 'Twos':
            score = specificNum(diceValues, 2);
            break;
        case 'Threes':
            score = specificNum(diceValues, 3);
            break;
        case 'Fours':
            score = specificNum(diceValues, 4);
            break;
        case 'Fives':
            score = specificNum(diceValues, 5);
            break;    
        case 'Sixes':
            score = specificNum(diceValues, 6);
            break;
        
        //Lower section
        case 'One Pair':
            break;
        case 'Two Pairs':
            break;
        case 'Three of a Kind':
            break;
        case 'Four of a Kind':
            break;
        case 'Small Straight':
            break;
        case 'Large Straight':
            break;
        case 'Full House':
            break;
        case 'Chance':
            break;      
        case 'Yatzy':
            break;

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