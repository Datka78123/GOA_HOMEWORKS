#https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/python

def calc(x):
    total1 = ''
    for i in x:
        total1 += str(ord(i))
    
    total2 = ''
    for ch in total1:
        if ch == '7':
            total2 += '1'
        else:
            total2 += ch
    
    sum1 = 0
    for j in total1:
        sum1 += int(j)
    
    sum2 = 0
    for j in total2:
        sum2 += int(j)

    return sum1 - sum2