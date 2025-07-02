#https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

def get_count(s):
    count = 0
    for char in s.lower():
        if char in 'aeiou':
            count += 1
    return count
