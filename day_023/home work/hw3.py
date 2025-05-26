

def string_add(x, y):
    if type(x) == int and type(y) == str:
        return y + str(x)
    elif type(y) == int and type(x) == str:
        return x + str(y)
    elif type(x) == int and type(y) == int:
        return str(x) + str(y)
    else:
        return str(x) + str(y)
