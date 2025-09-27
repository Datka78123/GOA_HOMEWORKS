countries = []
for i in range(3):
    c = input(f"Enter country {i+1}: ")
    countries.append(c)
capitals = {
    countries[0]: "Capital1",
    countries[1]: "Capital2",
    countries[2]: "Capital3"
}
for country, capital in capitals.items():
    print(f"{country} → {capital}")
search = input("Enter country to find capital: ")
if search in capitals:
    print("Capital:", capitals[search])
else:
    print("Country not found")
