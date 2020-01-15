def fibonacci(num):
    if num == 0: return 0
    elif num == 1: return 1
    else: return fibonacci(num -1) + fibonacci(num -2)

def palindromo(sentence):
    sentence = str(sentence).lower().replace(" ", "")
    return sentence == sentence[::-1]

def test_fibonacci_cinco():
    assert fibonacci(5) == 5

def test_palindromo_anita():
    assert palindromo("anita lava la tina")