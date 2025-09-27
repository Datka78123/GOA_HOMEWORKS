students = {
    "Ana": 95,
    "Giorgi": 88,
    "Luka": 76
}

# დაბეჭდვა მხოლოდ >=90
for name, score in students.items():
    if score >= 90:
        print(name, score)

# ახალი სტუდენტი
students.update({"Nino": 100})

print("Final students dict:", students)
