class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola ${this.nombre} y tengo ${this.edad} años`);
    }
    calcularDias(edad) {
        let diasVividos = this.edad * 365;
        console.log(`Has vivido ${diasVividos} dias`);
    }
}

let persona1 = new Persona("Ezequiel", 25);
persona1.saludar();
persona1.calcularDias();