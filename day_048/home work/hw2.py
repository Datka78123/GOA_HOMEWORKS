

def setter(x, y):
    b = set()
    res = []
    for i in x + y:
        if i not in b:
            b.add(i)
            res.append(i)
    return res
