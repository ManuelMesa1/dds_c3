var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Tienda",
  port: 3306,
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion correcta ");
  }
});

var quesry = connection.query(
  "INSERT INTO tbl_Unidad(condigo_Unidad, descripcionU) Values(?, ?)",
  [1, "litro"], function(error, result){
      if(error){
          throw error 
      }else{
          console.log(result);
      }
  }
);
