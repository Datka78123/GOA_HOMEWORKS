

def find_max(num):
    res = num[0] 
    for num in num:
        if num > res:
            res = num
    return res