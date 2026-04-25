let edad = 22
if (edad >= 18) {
    console.log("Es mayor de edad")
}
else {
    console.log("Es menor de edad")
}
let tipo = `cash`
switch (tipo) {
    case "cash":
        console.log("es efectivo")
        break
    case "card":
        console.log("es con tarjeta")
        break
    default:
        console.log("es otro metodo")
        break
}