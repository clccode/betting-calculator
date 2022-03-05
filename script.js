// Get user input on the odds and how much is being bet (this is for use in Node JS):
const prompt = require('prompt-sync')();

let odds = prompt('What are the odds of your bet?: ');
odds = parseInt(odds);
let stake = prompt('How much do you intend to bet?: ');
stake = parseInt(stake);

// Function for determining the probability and payout:

const odds_payout = (odds, stake) => {
    if (odds > 0) {
        odds_multiplier = odds/100;
        implied_prob = Intl.NumberFormat().format(100/(odds + 100) * 100);
        profit = Intl.NumberFormat().format(stake * odds_multiplier);
        console.log('The implied probability of winning the bet is ' + implied_prob + '%');
        console.log('Your potential profit is: ' + profit);
    } else if (odds < 0) {        
        odds = Math.abs(odds);
        odds_multiplier = odds/100;
        implied_prob = Intl.NumberFormat().format(odds/(odds + 100) * 100);
        profit = Intl.NumberFormat().format(stake * odds_multiplier);
        console.log('The implied probability of winning the bet is ' + implied_prob + '%');
        console.log('Your potential profit is: ' + profit);
    }
    
}

console.log(odds_payout(odds, stake));