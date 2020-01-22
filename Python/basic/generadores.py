def tabla_multiplicar(numero, maximo=10):
    for i in range(1, maximo+1):
        yield numero * i, numero, i

for res, numero, i in tabla_multiplicar(8):
    print(numero, " * ", i, " = ", res)