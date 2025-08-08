


def func(lis):
    res = []
    for i in range (len(lis)):
        if lis[i] not in res:
            res.append(lis[i])
    return res