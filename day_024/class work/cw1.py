#9 saati dila
#9 ze meti 15 zer naklebi shuadge
#15 dan 20 mde sagamo
#20 24 game

def clock(ocklock):
    if ocklock >= 20 and ocklock <24:
        return "game"
    if ocklock >= 15:
        return "sagamo"
    if ocklock > 9:
        return "shuadge"
    else:
        return "dila"
    
print(clock(20))