
res1 = 0 # res1 = ლუწი რიცხვების ჯამი
lis = [1,4,3,6,9,11,17,13,26,30]
num = [] #num კენტი რიცხვების რაოდენობა
for i in lis:
    if i % 2 == 0:
        res1+=i
    else:
        num.append(i)


print(res1)# res1 = ლუწი რიცხვების ჯამი
print(len(num))#num კენტი რიცხვების რაოდენობა