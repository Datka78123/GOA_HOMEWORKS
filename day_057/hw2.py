
fruits = []
for i in range(5):
    fruit = input(f"Enter fruit {i+1}: ")
    fruits.append(fruit)
fruits.extend(["Mango", "Pineapple"])
fruits.pop()
print("Original list:", fruits)
print("Alphabetical order:", sorted(fruits))
