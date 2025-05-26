

#მომხმარებელი შეიყვანს სამ მთელ რიცხვს. დაბეჭდე რომელი მათგანი არის ყველაზე დიდი.

def max(num1,num2,num3):
    if num1 > num2 and num1 > num3:
        return num1
    elif num2 > num1 and num2 > num3:
        return num2
    return num3

print(max(3.1,2.3,1.5))