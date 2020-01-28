mi_funcion = lambda numero: numero * numero

lista = [1, 2, 3, 4, 5]
#resultado = map(lambda numero: numero * numero , lista) en una sola linea todo

# resultado = map(mi_funcion, lista)
# lista_resultado = list(resultado)
# print(lista_resultado)

for i in reversed(lista):
    print(i)

for j in range(len(lista), 0, -1):
    print(j)