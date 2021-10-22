"use strict";
var dbConnection = require("./../../config/bd");

var User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.password = user.password;
};
User.create = function (newUser, result) {
  dbConnection.query("INSERT INTO users set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result.log(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.findById = function (id, result) {
  dbConnection.query(
    "SELECT * FROM users where id = ?",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
User.findAll = function (result) {
  dbConnection.query("SELECT * FROM users", function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("Users: ", res);
      result(null, res);
    }
  });
};
User.update = function (id, user, result) {
  dbConnection.query(
    "UPDATE users SET firstName=?,lastName=?, email=?, password=? WHERE id = ?",
    [user.firstName, user.lastName, user.email, user.password],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, res);
      }else{
          result(null, res)
      }
    }
  );
};
User.delete = function (id, result) {
  if (err) {
    console.log("error: ", err);
    result(null, err);
  } else {
    result(null, res);
  }
};

module.exports = User;
