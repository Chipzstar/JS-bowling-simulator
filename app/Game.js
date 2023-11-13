import {Round} from "./Round.js";

export class Game {
    constructor() {
        this.numRounds = 3
        this.rounds = Array(this.numRounds)
            .fill(0)
            .map((val, index) => new Round(index + 1))
        this.roundIndex = 0
        this.totalScore = 0
        this.averageScore = undefined
    }

    start() {
        for (let round of this.rounds) {
            console.log("************************************************")
            console.log("\t\tROUND: " + round.roundNumber)
            console.log("************************************************")
            for (let frame of round.frames) {
                console.log("\nFrame: " + frame.frameNumber)
                console.log("-----------------------------------------------")
                do {
                    let knockedPins = Math.ceil(Math.random() * (frame.pins.length));
                    frame.roll(knockedPins)
                    frame.toString()
                } while (frame.rollsAvailable)
                round.addToScore(frame.scores.reduce((prev, curr) => prev + curr, 0))
                console.log("TOTAL SCORE: " + round.score)
            }

            console.log("================================================")
            console.log("\t\tROUND OVER\n");
            this.totalScore += round.score;
        }
        console.log("************************************************")
        console.log("\t\tGAME OVER");
        console.log("************************************************")
        this.rounds.forEach(round => console.log(`ROUND ${round.roundNumber} SCORE: ${round.score}`))
        console.log("AVERAGE SCORE: " + Math.round(this.totalScore / this.rounds.length));

        console.log("\nThanks for playing! 😃")
    }

    resetRounds() {
        this.rounds = Array(this.numRounds)
            .fill(undefined)
            .map((val, index) => new Round(index + 1))
    }
}
