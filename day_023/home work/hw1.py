

def plus(x,y):
    if type(x) and type(y) != int:
        return int(x) + int(y)
    if type(x) or type(y) != int:
        return int(x) + int(y)
    else:
        return x + y 
    

print(plus('4',7))