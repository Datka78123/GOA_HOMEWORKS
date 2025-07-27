
my_list = ['e46', 'e39', 'e36', 'e34', 'f10']

# marto sami gamova
for car in my_list[:3]:
    print(car)


#---------------------------------------------------

plate = "GE-789-ABC"

if plate[:2] == "GE":
    print("georgian number")


#---------------------------------------------------

def get_middle_items(lst):
    return lst[1:-1]  # marto shua nawili

print(get_middle_items([10, 20, 30, 40]))  # [20, 30]
