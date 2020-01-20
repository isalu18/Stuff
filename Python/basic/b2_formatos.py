#Formato de textos, capitalize,swapcase,upper,lower
#variable.capitalize()
#si quieres saber si una variable es mayusculas o minusculas:
#variable.isupper()

#Para editar un texto se usa replace:

texto1 = "Curso de Python 3, Python Basico"
texto_reem = texto1.replace("Python", "Swift", 1) #1 = veces que se reemplazara la palabra Python
print(texto_reem)

#strip elimina los espacios que puedan haber al principio o al final de un string
#variable.strip()

curso = "Python"
version = "3"

resultado = "Curso de {} {}".format(curso, version)
print(resultado)