#https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/python

def no_space(x):
    res = ''
    trash = ''
    for i in range(len(x)):
        if x[i] ==' ':
            trash+=x[i]
        else:
            res+=x[i]
    return res