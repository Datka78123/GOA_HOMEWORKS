def count_positives_sum_negatives(arr):
    for i in arr:
        count = []
        negative = []
        if i > 0:
            count.append(i)
        if i <= 0:
            negative.append(i)
        return count+negative 