#https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/python

def count_by(x, n):
    result = []
    for i in range(1, n + 1):
        result.append(x * i)
    return result
