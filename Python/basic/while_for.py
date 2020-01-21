numero = 12345678
c = 0

while numero >= 1:
    numero /= 10
    c += 1
else:
    print("El numero es menor a 1: ", c, numero)

titulo = "Curso de Python 3"

for letra in titulo:
    if letra == "P":
        #break  termina con el for
        continue #se salta la letra
    print(letra)