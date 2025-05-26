

#მომხმარებელს შემოატანინე 5 რიცხვი ერთის შემდეგ მეორე, შეინახე ისინი სიაში (list-ში) და ბოლოს დაბეჭდე მათი ჯამი.

def sum_digits(number):
    digits = []
    number = str(number)
    for i in number:
        digits.append(int(i))
    return sum(digits)


print(sum_digits(12345))