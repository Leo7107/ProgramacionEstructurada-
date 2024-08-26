function diferenciaDias(fecha1, fecha2){
    let FechaInicial = new Date(fecha1)
    let fechaFinal = new Date(fecha2)
    let diferenciaTiempo = fechaFinal - FechaInicial
    const diferenciaDias = diferenciaTiempo / (1000 * 60 * 60 * 24)
    return(diferenciaDias)
}
let fecha1 = '1993-02-11'
let fecha2 = '2005-11-14'

let diasDiferencia = diferenciaDias(fecha1, fecha2)
console.log(`La diferencia de días entre las dos fechas es: ${diasDiferencia} días`)