#Python no tiene variables constantes asi que tendras que decirle a los demas programadores que tu variable
#sera constante llamando la variable en mayusculas...

#Tambien se pueden trabajar los strings como si fueran listas con respecto a inspeccionar sus elementos
#solo que no se puede cambiar algun elemento del string...
texto = "Que pedo"
res = texto[1:6:2]
#print(res)

#Split lo que hace es hacer una lista con el string dado, y separa los elementos por los espacios
#que este contenga, o bien tu puedes definir cual sera el separador dentro de los parentesis...
#Join lo que hace es hacer un string con una lista dada, y el separador se encuentra dentro de las comillas...
#Con Splitlines haces de un string con saltos de linea, una lista...

lenguajes = "C#;C++;Python"
lista_len = lenguajes.split(";")
print(lista_len)

texto_len = "; ".join(lista_len)
print(texto_len)

texto_salto = """Este es un
texto con
saltos de
linea"""

texto_sin = texto_salto.splitlines()
print(texto_sin)