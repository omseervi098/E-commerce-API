const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController");
router.get("/", productsController.listAll);
router.post("/create", productsController.create);
router.delete("/:id", productsController.delete); //for deleting
router.post("/:id/update_quantity", productsController.update); //for updating
module.exports = router;
