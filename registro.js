let registros = [];

function obtenerUsername(arreglo) {
  var username = document.getElementsById("username").value;
  return username;
}

function obtenerUsername(arreglo) {
  let filtroUserName = arreglo.filter((usuario) => {
    if (/\d/.test(usuario.username)) {
      return usuario;
    }
  });
  console.log(filtroUserName);
  return filtroUserName;
}

function filtrarCorreo(arreglo) {
  var correo = document.getElementsById("correo").value;
  return correo;
}
function agregarRegistro() {
  function Usuario(username, correo, contrasena) {
    this.username = username;

    this.correo = correo;

    this.contrasena = contrasena;
  }
}


module.exports.registros = registros;
module.exports.obtenerUsername = obtenerUsername;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.agregarRegistro = agregarRegistro;
