let estructura = {
    nombre: "Ezequiel",
    apellido: "Alvarez",
    edad: 22,
    habilidades: ["programacion", "Redes", "ciencia de datos", "Animacion 3D"]
};
console.log(estructura)

//destructuracion de objetos
const { nombre, edad } = estructura;
console.log(nombre, edad);

let calificacion = [
    { nombre: 'Mateo', nota: 10 },
    { nombre: 'Roberto', nota: 8 },
    { nombre: 'Jacob', nota: 10 }
];

console.log("La cantidad de calificaciones es: ", calificacion.length)
