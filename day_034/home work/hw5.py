#https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python

def remove_smallest(numbers):
    if not numbers:
        return []
    smallest = min(numbers)
    index = numbers.index(smallest)
    res = []
    for i in range(len(numbers)):
        if i != index:
            res.append(numbers[i])
    return res