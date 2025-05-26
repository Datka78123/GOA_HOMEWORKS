

#მომხმარებელი შეიყვანს პაროლს. თუ პაროლი 8-ზე ნაკლები სიმბოლოა — 
#დაბეჭდე "პაროლი ძალიან მოკლეა", თუ 8 ან მეტი — "პაროლი მიღებულია".

def password(password):
    password = str(password)
    if len(password) < 8:
        return 'password is too short'
    else:
        return 'password is confirmed'


print(password(1234567))