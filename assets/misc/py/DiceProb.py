from random import randint

### Test ###

# numbers = [7, 2, 3, 8]
# results = []

# for i in range(100):
#     a = numbers[randint(0,3)]
#     b = numbers[randint(0,3)]
#     c = numbers[randint(0,3)]
#     d = numbers[randint(0,3)]
#     test = f"{a}{b}{c}{d}"
#     test_int = int(test)
#     if test_int > 7500:
#         results.append(test)
#         results = list(dict.fromkeys(results))
#     print(results)

### Items greater than 7500 ###

from itertools import permutations

def count_numbers_greater_than_7500(digits):
    count = 0
    all_permutations = list(permutations(digits))

    for perm in all_permutations:
        num = int(''.join(map(str, perm)))
        if num > 7500:
            count += 1

    return count

# Digits to be used
digits = [7, 2, 3, 8]

# Total number of 4-digit combinations
total_combinations = len(list(permutations(digits)))

# Numbers greater than 7500
numbers_greater_than_7500 = count_numbers_greater_than_7500(digits)
print(numbers_greater_than_7500, total_combinations)

# Calculate probability
probability = numbers_greater_than_7500 / total_combinations * 100

# Display the result
print(f'Probability that the number is greater than 7500: {probability}')

### !!! Dice Prob ###

# one_or_two = input("Are you calculation 1 or 2 dices? ")
# one_or_two = int(one_or_two)

# if one_or_two == 1:
#     simulations_question = input("How many simulations do you want to do? ")
#     simulations_int = int(simulations_question)

#     outcome = {1:0,2:0,3:0,4:0,5:0,6:0} #map of sum:freq
#     sim = simulations_int

#     for simulations in range(sim):
#         first_dice_roll = randint(1,6)
#         dice = first_dice_roll
#         outcome[dice] += 1


#     for key in outcome.keys():
#         print("Percentage for rolling %s is: %s"%(key,outcome[key]/sim*100))



# elif one_or_two == 2:
#     simulations_question = input("How many simulations do you want to do? ")
#     simulations_int = int(simulations_question)

#     outcome = {2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0} #map of sum:freq
#     sim = simulations_int

#     for simulations in range(sim):
#         first_dice_roll = randint(1,6)
#         second_dice_roll = randint(1,6)
#         sum_dice = first_dice_roll + second_dice_roll
#         outcome[sum_dice] += 1

#     for key in outcome.keys():
#         print("Percentage for rolling a sum of %s is: %s"%(key,outcome[key]/sim*100))

