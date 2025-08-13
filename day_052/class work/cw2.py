#https://www.codewars.com/kata/57f609022f4d534f05000024/train/python

def stray(arr):
    for i in range(len(arr)):
        count = 0
        for j in range(len(arr)):
            if arr[j] == arr[i]:
                count += 1
        if count == 1:
            return arr[i]
