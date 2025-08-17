

def multiplication_table():
    num = int(input("შეიყვანე რიცხვი: "))
    print(f"\nგამრავლების ტაბულა {num}-ზე:\n")
    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

multiplication_table()
