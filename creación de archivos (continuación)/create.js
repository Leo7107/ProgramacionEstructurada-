const fs = require('fs')
const filename = 'estudiantes.json'

const estudiantes = [
    { nombre: 'Juan', edad: 18, carrera: 'ingenieria en DS' },
    { nombre: 'Pedro', edad: 21, carrera: 'ingenieria Civl' },
    { nombre: 'Jose', edad: 23, carrera: 'ingenieria En DS' }
]

fs.writeFile(filename, JSON.stringify(estudiantes, null, 2), (err) => {
    if (err) {
        console.log('Error al crear el archivo JSON.', err)
        return;
    } else {
        console.log('El archivo se ha creado con éxito.')
    }
})