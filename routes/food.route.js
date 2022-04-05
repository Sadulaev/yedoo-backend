const { foodController } = require("../controllers/food.controller");
const authMiddleware = require("../middleware/auth.middleware");

const { Router } = require("express");

const router = Router();

router.get("/", foodController.getAllFood);
router.post("/", authMiddleware, foodController.createFood);
router.delete("/:id", authMiddleware, foodController.deleteFood);
router.get("/category/:id", foodController.getFoodByCategoryId)

module.exports = router;
