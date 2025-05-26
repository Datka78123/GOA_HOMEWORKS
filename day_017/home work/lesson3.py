# manual_len ფუნქცია

lis = [1,2,3,4,5,6,7]

def manual_len(l):
    res=0
    for i in l:
        res+=1
    return res

print(manual_len(lis))
print(len(lis))
