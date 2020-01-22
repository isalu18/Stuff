def funcion(nombre, apellido, edad=23): #los valores de los argumentos debende ir pegados como en 'edad'
    return "El nombre es " + nombre + ". Su apellido es " + apellido + ". Y su edad es de " + str(edad)

print(funcion("Isaac", "Sanchez"))

def suma(*args): #con *args puedes utilizar n cantidad de argumentos en tu funcion
    total = 0
    for i in args:
        total += i
    return total 

print(suma(10, 20, 30, 40))

def dic(**kwargs): #agrupa los argumentos en un diccionario
    print(kwargs)

dic(a=10, b=20)