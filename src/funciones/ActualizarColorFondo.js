export function actualizarColorFondo(contidoId, id, colorResaltar, colorGeneral, largoArreglo){
    for (let u = 0; u < largoArreglo; u++) {
        document.getElementById(`${contidoId}${u}`).style.background = colorGeneral
    }
    document.getElementById(`${contidoId}${id}`).style.background = colorResaltar
}