

def validate_hello(message):
    greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    message_lower = message.lower()
    
    for greet in greetings:
        if greet in message_lower:
            return True
    return False
