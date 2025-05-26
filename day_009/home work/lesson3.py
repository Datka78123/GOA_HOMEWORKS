

def rps(p1, p2):
    if p1=="rock" and p2=="scissors":
        return p1 + "won"
    elif p1=="scissors" and p2=="paper":
        return p1 + "won"
    elif p1=="paper" and p2=="rock":
        return p1 + "won"
    elif p2=="rock" and p1=="scissors":
        return p2 + "won"
    elif p2=="scissors" and p1=="paper":
        return p2 + "won"
    elif p2=="paper" and p1=="rock":
        return p2 + "won"
    else:
        return "draw"
    
rps("rock","scisors")
    

