#შექმენით ფუნქცია რომელიც იღებ არგუმენტებად ორ ლისტს და აბრუნებს დადებითი რიცხვების რაოდენობასა და უარყოფითების ჯამს (ცალ-ცალკე).

lis1 = [-3,3,5,-2]
lis2 = [4,6,-7,2]

def func (l,k):
    res1=0
    res2=0
    for i in l:
        if i > 0:
            res1+=1
        else:
            res2+=i
    for i in k:
        if i > 0:
            res1+=1
        else:
            res2+=i
    return [res1]+[res2]

print(func(lis1,lis2))