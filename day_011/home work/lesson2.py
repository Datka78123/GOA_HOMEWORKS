#https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/python


def string_clean(s):
    to_remove = '0123456789' 
    res = ""
    for i in s:
        if i is not to_remove:
            res +=i
    return res
            

print(string_clean('dat22222o'))




