#https://www.codewars.com/kata/5aa736a455f906981800360d/train/p

def feast(beast, dish):
    beast = beast.upper()
    dish = dish.upper()
    if beast[0] == dish[0] and beast [-1] == dish [-1]:
        return True
    else:
        return False