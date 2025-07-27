def doubles(s):
    res = []
    for i in s:
        if len(res) > 0 and res[-1] == i:
            res.pop()
        else:
            res.append(i)
    return ''.join(res)