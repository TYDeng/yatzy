
class yatzyGame{
    constructor() {
        this.turn = 0; // Current turn number (0, 1, 2, or 3)
        this.diceValues = []; // Current values on each of the 5 dice
        this.diceKeep = []; // Keep(or not)  state for dice
    }

    initializeGame() {
        this.turn = 0;
        this.diceValues = [0, 0, 0, 0, 0]; // Initialize with 5 dice values
        this.diceKeep = [false, false, false, false, false]; // Initialize all dice to re-roll
    }

    rollDice() {
        for (let i = 0; i < 5; i++) {
            if (!this.keepDice[i]) {
                this.diceValues[i] = diceRoll(); // Roll the dice if not kept
            }
        }
    }

}