let fecha = new Date('February 20, 2012 03:12:00')
let opciones = {year:'numeric',month:'short',day:'numeric',hour:'numeric', minute:'numeric',hour12:true}
let Fecha = fecha.toLocaleString('en-US',opciones)
console.log(Fecha)