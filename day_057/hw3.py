

def is_even(number):
    return number % 2 == 0
for i in range(3):
    num = int(input(f"Enter number {i+1}: "))
    if is_even(num):
        print(f"Number {num} is even")
    else:
        print(f"Number {num} is odd")
