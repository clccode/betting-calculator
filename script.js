const oddsDisplay = document.getElementById('odds');
const betDisplay = document.getElementById('bet');

const getOdds = () => {
    document.addEventListener('click')
}

const odds_payout = (odds, stake) => {
    if (odds > 0) {
        oddsMultiplier = odds/100;
        let prob = 100/(odds+100);
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