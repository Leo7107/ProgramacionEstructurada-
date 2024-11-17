const fs = require('fs')
const filename = 'estudiantes.json'

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo', err)
        return;
    }

    const estudiantes = JSON.parse(data)

    const posicionAEliminar = 0;

    if (posicionAEliminar >= 0 && posicionAEliminar < estudiantes.length) {
        estudiantes.splice(posicionAEliminar, 1)

        fs.writeFile(filename, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err) {
                console.err('Error al escribir el archivo', err)
                return;
            }
            console.log('Estudiante ha sido eliminado exitosamente.')
        });
        
    }else{
       console.log('La posición proporcinada para eliminar invalida');
    }
}); 