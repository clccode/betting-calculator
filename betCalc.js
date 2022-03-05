// Get user input on the odds and how much is being bet (this is for use in Node JS):
const prompt = require('prompt-sync')();

let odds = prompt('What are the odds of your bet?: ');
odds = parseInt(odds);
let stake = prompt('How much do you intend to bet?: ');
stake = parseInt(stake);

// Function for determining the probability and payout:

const odds_payout = (odds, stake) => {
    if (odds > 0) {
        oddsMultiplier = odds/100;
        let prob = odds/(odds+100);
        let probRounded = Math.round((prob + Number.EPSILON) * 100)/100;
        let probPct = probRounded * 100;
        let profit = stake * oddsMultiplier;
        let payout = stake + profit;
        return `The probability of winning is ${probPct} percent and the potential payout is ${payout} dollars.`
    } else if (odds < 0) { 
        oddsMultiplier = Math.abs(odds/100);       
        let prob = Math.abs(odds)/(Math.abs(odds) + 100);
        let probRounded = Math.round((prob + Number.EPSILON) * 100)/100;
        let probPct = probRounded * 100;
        let profit = stake / oddsMultiplier;
        let payout = stake + profit;
        return `The probability of winning is ${probPct} percent and the potential payout is ${payout} dollars.`
    }
    
}

console.log(odds_payout(odds, stake));