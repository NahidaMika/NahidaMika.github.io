from random import uniform, randint, sample
class Banana():
    def __init__(self, name):
        self.name = name
        self.destroyed = False

    def check_destruction(self):
        if self.name == "Supernova":
            destruction_chance = randint(1, 1000)
            if destruction_chance == 1:
                self.destroyed = True
                print(f"{self.name} has been destroyed!")
            else:
                print(f"{self.name} is still intact.")
        elif self.name == "Satellite":
            destruction_chance = randint(1, 6)
            if destruction_chance == 1:
                self.destroyed = True
                print(f"{self.name} has been destroyed!")
            else:
                print(f"{self.name} is still intact.")
        else:
            print("Invalid object name.")

#Satellite (Gross Michel) 1/6 to be destroyed

def call_for_Satellite():

    # Create an object
    GrosMichel = "Satellite"
    Satellite = Banana(GrosMichel)

    # Check if the object is destroyed
    Satellite.check_destruction()

    # Check the object's status
    if Satellite.destroyed:
        print(f"The {GrosMichel} has been destroyed.")
    else:
        print(f"The {GrosMichel} is still operational.")

    return None

#Supernova (Cavendish) 1/1000 to be destroyed

def call_for_Supernova():
    # Create an object
    Cavendish = "Supernova"
    Supernova = Banana(Cavendish)

    # Check if the object is destroyed
    Supernova.check_destruction()

    # Check the object's status
    if Supernova.destroyed:
        print(f"The {Cavendish} has been destroyed.")
    else:
        print(f"The {Cavendish} is still operational.")

    return None

#Ancient Joker Each played card with [suit] gives X1.5 Mult when scored,suit changes at end of round

class AncientJoker():

    def __init__(self):
        
        self.suit_types = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
        self.previous_suit = None

    def get_Suit(self):
        suit = self.suit_types[randint(0, (len(self.suit_types)) - 1)]
        while suit == self.previous_suit:
            suit = self.suit_types[randint(0, (len(self.suit_types)) - 1)]
        self.previous_suit = suit
        return f"{suit}"
    
# Packs (Planet(Normal, Jumbo and Mega), Tarot & Spectral(Normal, Jumbo and Mega), )

Jokers = ["Joker","Greedy Joker","Lusty Joker","Wrathful Joker","Gluttonous Joker","Jolly Joker","Zany Joker","Mad Joker","Crazy Joker","Droll Joker","Sly Joker","Wily Joker","Clever Joker","Devious Joker","Crafty Joker","Half Joker","Four Fingers","Credit Card","Banner","Mystic Summit","Misprint","Fibonacci","Abstract Joker","Pareidolia","Satellite","Even Steven","Odd Todd","Scholar","Ancient Joker","Space Joker","Egg","Supernova","Shortcut","Turtle Bean","Juggler","Drunkard","Smiley Face","Blueprint","The Duo","The Trio","The Family","The Order","The Tribe","Brainstorm","Shoot the Moon","Triboulet"]
Planets = ["Pluto (High Card)", "Mercury (Pair)", "Uranus (Two Pair)", "Venus (Three if a Kind)", "Saturn (Straight)", "Jupiter (Flush)", "Earth (Full House)", "Mars (Four of a Kind)", "Neptune (Straight Flush & Royal Flush)"]
TarotAndSpectral = ["The High Priestess (II)", "The Emperor (IV)","The Hermit (IX)", "Judgement (XX)", "Temperance (XIV)", "The Fool (0)", "Black Hole", "The Soul", "Ankh", "Wraith", "Immolate"]

class BoosterPack:
    def __init__(self):
        self.jokers = ["Joker","Greedy Joker","Lusty Joker","Wrathful Joker","Gluttonous Joker","Jolly Joker","Zany Joker","Mad Joker","Crazy Joker","Droll Joker","Sly Joker","Wily Joker","Clever Joker","Devious Joker","Crafty Joker","Half Joker","Four Fingers","Credit Card","Banner","Mystic Summit","Misprint","Fibonacci","Abstract Joker","Pareidolia","Satellite","Even Steven","Odd Todd","Scholar","Ancient Joker","Space Joker","Egg","Supernova","Shortcut","Turtle Bean","Juggler","Drunkard","Smiley Face","Blueprint","The Duo","The Trio","The Family","The Order","The Tribe","Brainstorm","Shoot the Moon","Triboulet"]
        self.Planets = ["Pluto (High Card)", "Mercury (Pair)", "Uranus (Two Pair)", "Venus (Three if a Kind)", "Saturn (Straight)", "Jupiter (Flush)", "Earth (Full House)", "Mars (Four of a Kind)", "Neptune (Straight Flush & Royal Flush)"]
        self.TarotAndSpectral = ["The High Priestess (II)", "The Emperor (IV)","The Hermit (IX)", "Judgement (XX)", "Temperance (XIV)", "The Fool (0)", "Black Hole", "The Soul", "Ankh", "Wraith", "Immolate"]
        self.normal = 3 
        self.jumbo = 5
        self.mega = 5
        self.pack = []

    def gen_normal_pack(self):
        if len(self.jokers)  < self.normal:
            raise ValueError("Not enough jokers in the list to fill the pack")
        if len(self.Planets) < self.normal:
            raise ValueError("Not enough Planets in the list to fill the pack")
        if len(self.TarotAndSpectral) < self.normal:
            raise ValueError("Not enough Tarot & Spectral in the list to fill the pack")
        
        pack_type = str(input("Which pack do you want to generate? (Tarot & Spectral[1], Planets[2], Jokers[3])"))
        if pack_type == "Tarot & Spectral" or "1":
            self.pack = sample(self.TarotAndSpectral, self.normal)
        elif pack_type == "Planets" or "2":
            self.pack = sample(self.Planets, self.normal)
        elif pack_type == "Jokers" or "3":
            self.pack = sample(self.jokers, self.normal)


    def gen_jumbo_pack(self):
        if len(self.jokers)  < self.jumbo:
            raise ValueError("Not enough jokers in the list to fill the pack")
        if len(self.Planets) < self.jumbo:
            raise ValueError("Not enough Planets in the list to fill the pack")
        if len(self.TarotAndSpectral) < self.jumbo:
            raise ValueError("Not enough Tarot & Spectral in the list to fill the pack")
        
        pack_type = str(input("Which pack do you want to generate? (Tarot & Spectral[1], Planets[2], Jokers[3])"))
        if pack_type == "Tarot & Spectral" or "1":
            self.pack = sample(self.TarotAndSpectral, self.jumbo)
        elif pack_type == "Planets" or "2":
            self.pack = sample(self.Planets, self.jumbo)
        elif pack_type == "Jokers" or "3":
            self.pack = sample(self.jokers, self.jumbo)


    def gen_mega_pack(self):
        if len(self.jokers)  < self.mega:
            raise ValueError("Not enough jokers in the list to fill the pack")
        if len(self.Planets) < self.mega:
            raise ValueError("Not enough Planets in the list to fill the pack")
        if len(self.TarotAndSpectral) < self.mega:
            raise ValueError("Not enough Tarot & Spectral in the list to fill the pack")
        
        pack_type = str(input("Which pack do you want to generate? (Tarot & Spectral[1], Planets[2], Jokers[3])"))
        if pack_type == "Tarot & Spectral" or "1":
            self.pack = sample(self.TarotAndSpectral, self.mega)
        elif pack_type == "Planets" or "2":
            self.pack = sample(self.Planets, self.mega)
        elif pack_type == "Jokers" or "3":
            self.pack = sample(self.jokers, self.mega)

    def get_pack(self):
        return self.pack

# Example usage:
booster_pack = BoosterPack()
booster_pack.gen_normal_pack()
print(booster_pack.get_pack())


