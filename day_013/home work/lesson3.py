
def eve(x):
    if x%2!=0:
        c = x * 3
    else:
        c = x + 5
        return c % 5
    

print(eve(333))