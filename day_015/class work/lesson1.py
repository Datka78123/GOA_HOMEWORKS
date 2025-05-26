nums = [1,23,165,2,3,92,10,34,911]
res = []
def thre(n):
    if n<3:
        return False
    for i in range(3,n):
        if i % 3 != 0:
            return False
    return True

for i in nums:
    thre(nums)
    res.append() 