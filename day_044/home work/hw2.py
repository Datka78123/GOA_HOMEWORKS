#https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/python

def find(n):
    sum3 = 0
    sum5 = 0
    for i in range(1, n + 1):
        if i % 3 == 0:
            sum3 += i
        elif i % 5 == 0:
            sum5 += i
    return sum3 + sum5