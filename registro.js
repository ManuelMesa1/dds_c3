let registros = [];

function obtenerUsername(arreglo){
    var username = document.getElementsById("username").value
    return username    
}

function filtrarCorreo(arreglo){
    var correo = document.getElementsById("correo").value
    return correo
        
} 
function agregarRegistro(arreglo){
    var nuevoRegistro = [username, correo]
    registros.push(nuevoRegistro)
}

module.exports.registros = registros;
module.exports.obtenerUsername = obtenerUsername;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.agregarRegistro = agregarRegistro;