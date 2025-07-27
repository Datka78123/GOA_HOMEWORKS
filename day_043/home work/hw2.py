#https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python

def abbrev_name(name):
    res = ''
    for i in range(len(name)):
        if i == 0:
            res += name[i].upper() + '.'
        elif name[i - 1] == ' ':
            res += name[i].upper()
    return res