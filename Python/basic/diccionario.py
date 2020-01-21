dic = {"a":1, "b":2, "c":3, "d":4, "e":5}

valor = dic["a"]
print(valor)
#Para ver si un elemento esta en el diccionario y te regresa un bool
buscar = "a" in dic

llaves = dic.keys()
valores = dic.values()

dic["f"] = 6

del dic["a"]
#valor_el = dic.pop("a")
print(dic)
