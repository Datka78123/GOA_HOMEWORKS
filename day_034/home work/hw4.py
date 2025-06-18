#https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python

def number(bus_stops):
    res = 0
    for i in bus_stops:
        res += i[0]
        res -= i[1]
    return res