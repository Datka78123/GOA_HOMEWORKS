


def delete_nth(lst, n):
    result = []
    seen = {}

    for num in lst:
        if num not in seen:
            seen[num] = 1
            result.append(num)
        elif seen[num] < n:
            seen[num] += 1
            result.append(num)

    return result