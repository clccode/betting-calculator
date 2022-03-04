// Get user input on the odds and how much is being bet (this is for use in Node JS):
const prompt = require('prompt-sync')();

var odds = prompt('What are the odds of your bet?: ');
var stake = prompt('How much do you intend to bet?: ');

// Function for determining the probability and payout:

const odds_payout = (odds, stake) => {
    if (odds > 0) {
        odds_multiplier = odds/100;
        implied_prob = Math.round(Math.abs(100/(odds + 100)));
        payout = Math.round(stake * odds_multiplier);
        console.log(`The implied probability of winning the bet is ${implied_prob}%`);
        console.log(`Your potential payout (profit + stake) is: ${payout + stake}`)
    } else if (odds < 0) {
        odds_multiplier = Math.abs(odds/100);
        implied_prob = Math.round(Math.abs(odds)/Math.abs(odds) + 100);
        payout = Math.round(stake / odds_multiplier);
        console.log(`The implied probability of winning the bet is ${implied_prob * 100}%`);
        console.log(`Your potential payout (profit + stake) is: ${payout + stake}`)
    }
    
}

console.log(odds_payout(odds, stake));