#https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python
#დაწერეთ/ახსენით სამივე გზით ეს kata.


# 1

def remove_smallest(numbers):
    #თუ ლისტი ცარიელია დავაბრუნოთ ლისტი
    if len(numbers)==0:
        return []

    # ვიპოვოთ index-ი პატარა რიცხვის რომელიც პირველი შეგხვდება
    min_index = numbers.index(min(numbers))

    # დავაბრუნოთ ლისტი პატარა რიცხვის გარეშე
    return numbers[:min_index] + numbers[min_index + 1:]



#2

def remove_smallest(numbers):
    #თუ ლისტი ცარიელია დავაბრუნოთ ლისტი
    if len(numbers)==0:
        return []
    
    # ვიპოვოთ index-ი პატარა რიცხვის რომელიც პირველი შეგხვდება
    min_index = numbers.index(min(numbers))
    result = []

    #გადავუაროთ ლისტს FOR ციკლით და თუ index არ უდრის
    #პატარა რიცხვის index-ს მაშინ ის დავამატოთ result ცვლადში
    for i in range(len(numbers)):
        if i != min_index:
            result.append(numbers[i])

    #დავაბრუნოთ result
    return result



#3

def remove_smallest(numbers):
    #თუ ლისტი ცარიელია დავაბრუნოთ ლისტი
    if len(numbers)==0:
        return []

    min = min(numbers)
    min_index = -1

    # ვიპოვოთ min ის ინდექსი რომელიც პატარა რიცხვს ნიშნავს
    index = 0
    for num in numbers:
        if num == min:
            min_index = index
            break
        index += 1

    # ავაწყოთ ახალი ლისტი ციკლის გამოყენებით რომელიც გადაახტება
    #min ის index-ს და დაგვვიბრუნებს სწორს პასუხხს
    result = []
    index = 0
    for num in numbers:
        if index != min_index:
            result.append(num)
        index += 1

    #დავაბრუნოთ result
    return result