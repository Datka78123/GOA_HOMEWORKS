#manual_index ფუნქია

lis = [1,2,3,4,5,6,7]

def manual_index(l,x):
    res = -1
    for i in l:
        res+=1
        if i == x:
            return res
        
print(manual_index(lis,3))
print(lis.index(3))
