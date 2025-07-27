def unique_sum(lst):
    if len(lst) == 0:
        return None
    res = 0
    used = []
    for i in lst:
        if i in used:
            pass
        else:
            used.append(i)
            res+=i
    return res