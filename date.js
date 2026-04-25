const fecha = new Date();

console.log(
    fecha.toLocaleDateString('es-SV', {
        timeZone: 'America/El_Salvador',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
);