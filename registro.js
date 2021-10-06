let registros = [];

function obtenerUsername(arreglo){
    var username = document.getElementsById("username").value;
    registros.push(username);    
}

function filtrarCorreo(arreglo){
        
} 
function agregarRegistro(arreglo){

}

module.exports.registros = registros;
module.exports.obtenerUsername = obtenerUsername;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.agregarRegistro = agregarRegistro;