const fs = require('fs')
const filename = 'estudiantes.json'
fs.readFile(filename, 'utf8', (err, data)=>{
    if(err){
        console.log('Erro al leer el archivo JSON', err)
        return;
    }

    const estudiantes = JSON.parse(data);
    estudiantes[0].edad = 31;

    fs.writeFile(filename, JSON.stringify(estudiantes, null, 2),(err)=>{
        if(err){
            console.log('Error al escribir el archivo', err)
            return;
        }
        console.log('Archivo se ha actualizado exitosamente.')
    });
});