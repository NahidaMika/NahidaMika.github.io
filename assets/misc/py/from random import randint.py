from random import randint
from math import sqrt

perfect_square=[]
non_perfect_square = []
num = []

min = int(input("Enter the minimum number: "))
max = int(input("Enter the maximum number: (+1) "))

for i in range(min, max):
    num.append(i)

for perfectSQRT in num:

    b = sqrt(perfectSQRT)

    if not b.is_integer():
        non_perfect_square.append(perfectSQRT)
    elif b.is_integer():
        perfect_square.append(perfectSQRT)

print(f"\n{perfect_square}") 
print(f"The number of perfect squares is {len(perfect_square)}/{len(num)}")
print(f"\n{non_perfect_square}")
print(f"The number of non-perfect squares is {len(non_perfect_square)}/{len(num)}")
    