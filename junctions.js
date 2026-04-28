function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Ezequiel");

const despedir = function (nombre) {
    console.log("Adios " + nombre);
}

despedir("Ezequiel");

const Saludar = () => {
    console.log("Hola esta es una funcion punta de flecha")
}

Saludar();

const bienvenida = (nombre, curso) => {
    console.log(`Hola ${nombre} bienvenido a ${curso}`);
}

bienvenida("Ezequiel", "Formacion docente");

//Parametros por defecto
const mulitplicar = (a, b = 2) => {
    console.log(`La multiplicacion de ${a} por ${b} es:`, a * b)
}
mulitplicar(4);
mulitplicar(4, 5);
