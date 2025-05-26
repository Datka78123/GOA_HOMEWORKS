def module(lis):
    countstr = 0
    countint = 0
    countbool = 0
    countflt = 0
    
    for i in lis:
        if type(i) == str:
            countstr += 1
        elif type(i) == int:
            countint += 1
        elif type(i) == float:
            countflt += 1
        elif type(i) == bool:
            countbool += 1
    
    if countstr >= countint and countstr >= countflt and countstr >= countbool:
        return 'string'
    elif countint >= countstr and countint >= countflt and countint >= countbool:
        return 'integer'
    elif countflt >= countstr and countflt >= countint and countflt >= countbool:
        return 'float'
    else:
        return 'boolean'
    
print(module([1, 2.5, True, 'hello', False, 3, 4.0, 'world', 'test']))
