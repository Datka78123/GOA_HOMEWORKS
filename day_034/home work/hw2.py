#https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(text):
    res = []
    word = ''
    for i in text:
        if i != ' ':
            word += i
        else:
            res.append(word[::-1])
            res.append(' ')
            word = ''
    res.append(word[::-1])
    return ''.join(res)
