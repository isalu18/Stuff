"""
>>> recursivo = Recursivo()
>>> recursivo.factorial(5)
120
"""

class Recursivo:
    def factorial(self, num):
        if num == 0: return 1
        else: return num * self.factorial(num -1)