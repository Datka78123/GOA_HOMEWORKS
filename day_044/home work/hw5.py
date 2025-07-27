#https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

def filter_list(lst):
    result = []
    for item in lst:
        if type(item) == int:
            result.append(item)
    return result