num = int(input("write your number: "))
count = 0

while num ==1:
    num = int(input("write your number: "))

for i in range (2,num):
    if num%i==0 and count ==0:
        print("your number is not a prime")
        count += 1
   
if count==0:
    print("your number is a prime")