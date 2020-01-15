def palindromo(sentence):
    """Retorna verdadero si el string es un palindromo,
    en caso contrario, retorna falso

    sentence -- String o entero

    >>> palindromo("anita lava la tina")
    True

    >>> palindromo("Isaac")
    False
    """
    sentence = str(sentence).lower().replace(" ", "")
    return sentence == sentence[::-1]