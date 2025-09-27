def most_frequent_char(s):
    freq = {}  
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    return max(freq, key=freq.get)
print(most_frequent_char("banana"))  
