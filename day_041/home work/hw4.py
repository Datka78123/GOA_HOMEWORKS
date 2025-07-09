numbers = [3, 7, 2, 9, 4, 1]

def max(lis):
    num = lis[0]  
    for i in range(1, len(lis)):  
        if lis[i] > num:
            num = lis[i]
    return num

print(max(numbers)) 

