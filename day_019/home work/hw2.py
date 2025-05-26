#შექმენით ფუნქცია რომელიც არგუმენტებად იღებს ორ ლისტს და გამოაქვს ის, რომლის ელემენტებთა ჯამი (iteger-თა) უფრო მეტია.


lis1 = ['ll','lll']
lis2 = ['l','lllll']

def func (l,k):
    count1=0
    count2=0
    for i in l:
        count1=+1
    for i in k:
        count2=+1
    if count1 > count2:
        return l
    else:
        return k 
    
print(func(lis1,lis2))