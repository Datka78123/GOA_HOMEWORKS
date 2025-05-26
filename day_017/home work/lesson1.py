#manual_remove ფუნქცია

lis = [1,2,3,4,5,6,7]

def manual_remove(l, value):
    new_lis = []
    removed = False

    for i in l:
        if i == value and not removed:
            removed = True  
            continue
        new_lis.append(i)

    return new_lis
