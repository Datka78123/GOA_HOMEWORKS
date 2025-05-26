#https://www.codewars.com/kata/5715eaedb436cf5606000381

def positive_sum(arr):
    result = 0
    for i in arr:
        if i <= 0:
            pass
        if i > 0:
            result += i
    return result