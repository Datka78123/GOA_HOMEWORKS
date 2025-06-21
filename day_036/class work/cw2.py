
#https://www.codewars.com/kata/5a2b7edcb6486a856e00005b/train/python

def check_vowel(strng, position):
    vowels = 'aeiouAEIOU'
    if position < 0:
        return False
    if position >= len(strng):
        return False
    letter = strng[position]
    if letter in vowels:
        return True
    else:
        return False