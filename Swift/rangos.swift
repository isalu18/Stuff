let led = 0.8
switch led {
case ..<1:
    print("Rango semicerrado")
case 1...5:
    print("Rango cerrado")
case 80...:
    print("Cerrado por un lado")    
default:
    print("No se pudo evaluar el numero")
}