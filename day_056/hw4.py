def sort_even_odd(lst):
    evens = [x for x in lst if x % 2 == 0]
    odds = [x for x in lst if x % 2 != 0]
    return evens + odds

print(sort_even_odd([1, 2, 3, 4, 5, 6])) 
