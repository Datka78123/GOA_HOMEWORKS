#https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/python

def find_smallest(numbers, to_return):
    smallest = numbers[0]
    index = 0

    for i in range(1, len(numbers)):
        if numbers[i] < smallest:
            smallest = numbers[i]
            index = i

    if to_return == "value":
        return smallest
    elif to_return == "index":
        return index