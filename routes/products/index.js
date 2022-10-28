const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController");
router.get("/", productsController.listAll);
router.get("/create", productsController.create);
router.get("/:id", productsController.delete); //for deleting
router.get("/:id/update_quantity", productsController.update); //for updating
module.exports = router;
