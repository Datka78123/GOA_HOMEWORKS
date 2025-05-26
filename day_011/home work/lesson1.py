#https://www.codewars.com/kata/5810085c533d69f4980001cf/train/python



def calculator(x, y, op):
     if type(x)!= int:
        return "unknown value"
     if type(y)!= int:
        return "unknown value"
     if op == '+':
        return x + y
     if op == '-':
        return x - y
     if op == '/':
        return x / y
     if op == '*':
        return x * y
     return "unknown value"


