odds = int(input('What are the odds of your bet?: '))
stake = int(input('How much do you intend to bet?: '))

if odds > 0:
	odds_multiplier = odds/100
	implied_prob = round(100/(odds + 100), 2)
	payout = round(stake * odds_multiplier,2)
	print(str(f'The implied probability of winning the bet is {implied_prob * 100}%'))
	print(str(f'Your potential payout (profit + stake) is: {payout + stake}'))
elif odds < 0:
	odds_multiplier = abs(odds/100)
	implied_prob = round(abs(odds)/(abs(odds) + 100), 2)
	payout = round(stake / odds_multiplier,2)
	print(str(f'The implied probability of winning the bet is {implied_prob * 100}%'))
	print(str(f'Your potential payout (profit + stake) is: {payout + stake}'))