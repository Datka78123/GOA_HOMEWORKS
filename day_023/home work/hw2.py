

def devision(x, y):
    x = int(x)
    y = int(y)
    
    if x == 0 or y == 0:
        return 'ZeroDivissionError'
    if x < y:
        return y / x
    elif x > y:
        return x / y
    else:
        return x + y


print(devision('3',9))