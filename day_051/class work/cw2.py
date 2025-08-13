

def count(s):
    x= 'aeiou'
    xmovani = ''
    tanxmovani = ''
    for i in range(len(s)):
        if s[i] in x:
            xmovani+=1
        else:
            tanxmovani+=1
    return [xmovani , tanxmovani]