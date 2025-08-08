

def iter(x,y):
    if len(x) > len(y):
        b = x
        c = y
    else:
        b = y
        c = x
    res = []
    for i in range(len(b)):
        if b[i] in c and b[i] not in res:
            res += b[i]
    return res