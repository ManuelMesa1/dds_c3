"user strict";
var dbConnection = require("./../../config/bd");

var Service = function (service) {
  this.name = service.name;
  this.price = service.price;
  this.time = service.time;
};
Service.create = function (newService, result) {
  dbConnection.query(
    "INSERT INTO services set ?",
    newService,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result.log(err, null);
      } else {
        console.log(res.insertId);
        result(null.insertId);
      }
    }
  );
};
Service.findById = function (id, result) {
  dbConnection.query(
    "SELECT * FROM services WHERE id = ?",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result.log(err, null);
      } else {
        result(null, err);
      }
    }
  );
};
Service.findAll = function (result) {
  dbConnection.query("SELECT * FROM services", function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("Services: ", res);
      result(null, res);
    }
  });
};
Service.update = function (id, service, result) {
  dbConnection.query(
    "UPDATE services SET name=?,price=?,time=? WHERE id = ?",
    [service.name, service.price, service.time],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Service.delete = function (id, result) {
  if (err) {
    console.log("error: ", err);
    result(null, err);
  } else {
    result(null, res);
  }
};

module.exports = Service;
