# edad = int(input("Ingresa tu edad: "))
# edad = edad + 1
# print("Tu edad es de: " + str(edad))

curso = "Curso de Python"

curso = "c" + curso[1:]
print(curso)

resultado = curso.count("de")
print(resultado)
#o
resultado1 = "de" in curso
print(resultado1)
#o
resultado2 = curso.find("de")
print(resultado2)