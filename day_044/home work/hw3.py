#https://www.codewars.com/kata/56747fd5cb988479af000028

def get_middle(s):
    len = len(s)
    md = len // 2

    if len % 2 == 0:
        return s[md - 1:md + 1]
    else:
        return s[md]