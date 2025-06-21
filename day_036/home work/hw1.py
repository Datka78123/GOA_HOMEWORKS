#https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python

def litres(time):
    value = 0.5 * time
    result = 0
    while result + 1 <= value:
        result += 1
    return result