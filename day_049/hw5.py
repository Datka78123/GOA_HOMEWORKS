


x = [
    {"name": "Zarala", "age": 22},
    {"name": "George", "age": 17},
    {"name": "Nika", "age": 19},
    {"name": "Tina", "age": 16}
]

for i in x:
    if i["age"] > 18:
        print(f"Name: {i['name']}, Age: {i['age']}")