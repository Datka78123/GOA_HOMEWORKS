def age_check():
    age = input('How old are you? age:')
    while not age.isdigit():
        age = input('Use only numbers: ')
    age = int(age)
    if age < 18:
        return 'You are not adult'
    return 'You are adult'


