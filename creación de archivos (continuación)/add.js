const fs = require('fs')
const filename = 'estudiantes.json'

fs.readFile(filename, 'utf8', (err, data)=>{
    if(err){
        console.error('El archivo no se ha podido leer', err)
        return;
    }
     const estudiantes = JSON.parse(data)
     const nuevoEstudiante = {nombre: 'Carlos', edad: 18, carrera:'Ingeniera Industrial'}
     estudiantes.push(nuevoEstudiante);

     fs.writeFile(filename, JSON.stringify(estudiantes, null, 2), (err)=>{
        if(err){
            console.error('Error al modificar el archivo', err)
            return;
        }
        console.log('Nuevo estudiante agregado al archivo JSON.')
     })
})