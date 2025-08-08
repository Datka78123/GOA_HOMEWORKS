

def duplicates(s):
    x = ''
    res = ''
    for i in range (len(s)):
        x+= s[i]
        if s[i] in x:
            res+=x[i]
    return res

            


