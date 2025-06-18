

def split(strn):
    wrd = ''
    res = []
    for i in strn:
        if i == ' ':
            res.append(wrd)
            wrd = ''
        else:
            wrd+=i
    if wrd: 
        res.append(wrd)
    return res


print(split('dato lika lela darbaza'))