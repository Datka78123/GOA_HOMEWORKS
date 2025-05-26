

def filter(lis):
    filtered_lis = []
    for i in lis:
        if isinstance(i, int): 
            filtered_lis.append(i)
    return filtered_lis
