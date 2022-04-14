const { orderController } = require("../controllers/order.controller");
// const authMiddleware = require('../middleware/auth.middleware');

const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.get("/", orderController.getOrder);
router.post("/", orderController.createOrder);
router.delete("/:id", orderController.deleteOrder);
router.patch("/:id", authMiddleware, orderController.acceptOrder)

module.exports = router;
