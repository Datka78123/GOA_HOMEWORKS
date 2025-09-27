

def unique_numbers(lst):
    return [x for x in lst if lst.count(x) == 1]

print(unique_numbers([1, 2, 2, 3, 4, 4, 5]))
