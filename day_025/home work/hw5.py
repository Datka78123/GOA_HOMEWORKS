#https://www.codewars.com/kata/5583090cbe83f4fd8c000051

def digitize(n):
    lis = []
    for i in str(n):
        lis.append(int(i))
    return lis[::-1]