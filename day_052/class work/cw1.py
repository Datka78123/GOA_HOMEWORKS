#https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/python

FIRST_NAME = {
    "A": "Alpha", "B": "Beta", "C": "Captain", "D": "Delta", "E": "Echo",
    "F": "Falcon", "G": "Ghost", "H": "Hunter", "I": "Iron", "J": "Jet",
    "K": "Knight", "L": "Laser", "M": "Master", "N": "Nova", "O": "Omega",
    "P": "Phantom", "Q": "Quantum", "R": "Rogue", "S": "Shadow", "T": "Thunder",
    "U": "Ultra", "V": "Viper", "W": "Wolf", "X": "Xenon", "Y": "Yankee", "Z": "Zero"
}

SURNAME = {
    "A": "Assassin", "B": "Blaze", "C": "Crusher", "D": "Destroyer", "E": "Enforcer",
    "F": "Fury", "G": "Grinder", "H": "Hammer", "I": "Invader", "J": "Jaguar",
    "K": "Killer", "L": "Lightning", "M": "Monster", "N": "Ninja", "O": "Overlord",
    "P": "Predator", "Q": "Quickshot", "R": "Ranger", "S": "Slayer", "T": "Terminator",
    "U": "Undertaker", "V": "Venom", "W": "Warrior", "X": "Xecutioner", "Y": "Yak", "Z": "Zombie"
}


def alias_gen(f_name: str, l_name: str) -> str:
    if not f_name[0].isalpha() or not l_name[0].isalpha():
        return "Your name must start with a letter from A - Z."
    
    first_key = f_name[0].upper()
    last_key = l_name[0].upper()
    
    return f"{FIRST_NAME[first_key]} {SURNAME[last_key]}"