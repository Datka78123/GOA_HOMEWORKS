#https://www.codewars.com/kata/546e2562b03326a88e000020/train/python


def square_digits(num):
    res = []
    num = str(num)
    for i in num:
        j = int(i)
        j = j**2
        res.append(str(j))
    res = "".join(res)
    return int(res)

