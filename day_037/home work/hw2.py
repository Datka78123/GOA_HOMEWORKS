#https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

def descending_order(num):
    nums = list(str(num))
    nums = sorted(str(num), reverse=True)
    return int("".join(nums))