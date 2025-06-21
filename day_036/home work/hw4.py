
#https://www.codewars.com/kata/56606694ec01347ce800001b/train/python

def is_triangle(a, b, c):
    if a <= 0 or b <= 0 or c <= 0:
        return False
    if a + b > c and a + c > b and b + c > a:
        return True
    return False