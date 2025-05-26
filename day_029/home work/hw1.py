

def operatre (age,license):
    if age >= 18 and license == True:
        #შევამოწმებთ არის თუ არა მომხმარებელი 18 წლის და აქვს თუ არა მართვის მოწმობა,
        # თუ ორივე პირობა True არაა, მაშინ დავაბრუნებთ ტექსტს "cant drive car" იმიტომ რომ and ის ოპერატორი
        # გამოიტანს False თუ ერთი პირობა მაინც False იქნება 
        return "can drive car"
    else:
        return "cant drive car"
        #თუ მომხმარებელი 18 წლის არაა ან მართვის მოწმობა არა აქვს, მაშინ დავაბრუნებთ ტექსტს "cant drive car"