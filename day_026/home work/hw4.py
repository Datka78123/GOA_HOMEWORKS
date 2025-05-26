

def math_operation(x,y,operator):
    if operator == '-':
        return type(x - y)
    if operator == '+':
        return type(x + y)
    if operator == '==':
        return type(x == y)
    if operator == '/':
        return type(x / y)
    
print(math_operation(12,3,'/'))