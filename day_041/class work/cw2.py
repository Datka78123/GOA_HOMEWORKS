def get_min_max(seq):
    min = seq[0]
    max = seq[0]
    for i in seq:
        if i < min:
            min = i
        elif i > max:
            max = i
    return (min, max)
