const fs = require('fs')
const filename = 'estudiantes.json'

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo', err)
        return;
    }
    try {
        const estudiantes = JSON.parse(data)
        console.log('Contenido del archivo JSON: ', estudiantes)

    } catch (error) {
        if (error) {
            console.log('Error al paresear el archivo', error)
        }
    }
})