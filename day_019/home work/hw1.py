#შექმენით ფუნქცია, რომელიც აერთებს ორ ლისტს (ორივეში მხოლოდ integer-ებია) და ასევე ალაგებს მათ ზრდადობის მიხედვით.

lis1 = [1,3]
lis2 = [2,4]


def func(l,k):
    res=[] #result
    for i in l:
        res.append(i)
    for i in k:
        res.append(i)
    res.sort()
    return res


print(func(lis1,lis2))
