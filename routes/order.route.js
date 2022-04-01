const { orderController } = require("../controllers/order.controller");
import authMiddleware from "../middleware/auth.middleware";

const { Router } = require("express");

const router = Router();

router.get("/", authMiddleware, orderController.getOrder);
router.post("/", authMiddleware, orderController.createOrder);
router.delete("/:id", authMiddleware, orderController.deleteOrder);

module.exports = router;
