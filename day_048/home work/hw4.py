

def dup(lis):
    res = []
    for i in range(len(lis)):
        if lis[i] not in res:
            res += lis[i]
    return res