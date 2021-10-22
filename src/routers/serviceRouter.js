const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceModel");
// Retrieve all services
router.get("/", serviceController.findAll);
// Create a new service
router.post("/", serviceController.create);
// Retrieve a single service with id
router.get("/:id", serviceController.findById);
// Update a service with id
router.put("/:id", serviceController.update);
// Delete a user with id
router.delete("/:id", serviceController.delete);
module.exports = serviceRouter;
