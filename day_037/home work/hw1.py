#https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python

def accum(s):
    res = ""
    index = 0

    for i in s:
        chr = i.upper() 
        if index > 0:
            chr += i.lower() * index  
        res += chr
        if index < len(s) - 1:
            res += "-" 
        index += 1

    return res