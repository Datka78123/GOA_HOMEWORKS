#https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python

def find_next_square(sq):
    num = sq ** 0.5
    if num.is_integer():
        num2 = int(num) + 1
        return num2 ** 2
    else:
        return -1