const fs = require('fs')
const filename = 'estudiantes.json'

fs.readFile(filename,'utf8', (err,data)=>{
    if(err){
        console.error('Error al leer el archivo', err)
    }

    const estudiantes = JSON.parse(data)
    console.log(`Numero total de estudiantes es de: ${estudiantes.length}`);
})