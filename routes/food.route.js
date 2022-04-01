const { foodController } = require("../controllers/food.controller");
const authMiddleware = require("../middleware/auth.middleware");

const { Router } = require("express");

const router = Router();

router.get("/", foodController.getAllFood);
router.post("/", authMiddleware, foodController.createFood);
router.delete("/:id", authMiddleware, foodController.deleteFood);

module.exports = router;
