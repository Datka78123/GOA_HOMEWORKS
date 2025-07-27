def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"
    
    sum = 0
    for i in range(0, m, n):
        sum += i
    return sum
