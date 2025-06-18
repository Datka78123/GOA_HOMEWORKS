

def authorize():
    access = 'babua'
    passw = input("What's the password? ")
    while passw != access:
        passw = input("Wrong!! Try again: ")
    return 'Access granted'


