#https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/python

def century(year):
    if year > 2000:
        return 21
    if year > 1900:
        return 20
    if year > 1800:
        return 19
    if year > 1700:
        return 18
    if year > 1600:
        return 17
    if year > 1500:
        return 16
    if year > 1400:
        return 15
    if year > 1300:
        return 14
    if year > 1200:
        return 13
    if year > 1100:
        return 12
    if year > 1000:
        return 11
    if year > 900:
        return 10
    if year > 800:
        return 9
    if year > 700:
        return 8
    if year > 600:
        return 7
    if year > 500:
        return 6
    if year > 400:
        return 5
    if year > 300:
        return 4
    if year > 200:
        return 3
    if year > 100:
        return 2
    if year > 1:
        return 1
    else:
        return 0