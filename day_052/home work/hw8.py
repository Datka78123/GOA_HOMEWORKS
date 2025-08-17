

def guess_game():
    number = 21
    attempts = 0

    while True:
        guess = int(input("გამოიცანი რიცხვი (1-100): "))
        attempts += 1

        if guess < number:
            print("მეტია!")
        elif guess > number:
            print("ნაკლებია!")
        else:
            print(f"გილოცავ! სწორია {number}, სცადე {attempts} მცდელობაში.")
            break

guess_game()
