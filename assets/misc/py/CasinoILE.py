from random import uniform, randint

players_list = []

# Rolls
def create_rolls():
    N=2

    rolls = {
    'high_high_roll': round(uniform(2.5,3.5), N),
    'high_low_roll': round(uniform(1.5,2.5), N),
    'low_low_roll': round(uniform(0,1), N),
    'low_high_roll': round(uniform(1,2), N),
    }

    return rolls

def get_type_of_roll():
    roll_types = ['high', 'low', 'low', 'low']
    roll_subtypes = ['high', 'low']

    type = roll_types[randint(0, (len(roll_types)) - 1)]
    subtype = roll_subtypes[randint(0, (len(roll_subtypes)) - 1)]
    
    return f"{type}_{subtype}_roll"

# Initializing the game

names = input("").split(",")

for name in names:
    if name not in players_list:
        players_list.append(name)
        print(f"Player {name} added successfully!")
    else:
        print(f"Player {name} already exists.")

print(f"\nCurrent players: {', '.join(players_list)}")

for player in players_list:
    player_dict = {
        'player_id': player,
        'player_money': 150
    }

    rolls = create_rolls()
    roll_type = get_type_of_roll()

    print(f"Player {player_dict['player_id']} has ${player_dict['player_money']}")
    bet = int(input("Enter the amount of money you want to bet: "))
    if bet > player_dict['player_money']:
        print("Not enough money!")
    else:
        player_dict['player_money'] -= bet
        multiplied_bet = round(bet * rolls[roll_type], 2)
        print(f"{player_dict['player_id']} rolled a {roll_type} and bet {bet} with a result of {multiplied_bet}.")
        player_dict['player_money'] += multiplied_bet
        if player_dict['player_money'] <= 0:
            print(f"{player_dict['player_id']} is out of money!")
            players_list.remove(player_dict['player_id'])
    print(f"Player {player_dict['player_id']} has left ${player_dict['player_money']}\n")



            
