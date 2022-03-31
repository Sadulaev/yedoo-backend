const { orderController } = require("../controllers/order.controller");

const { Router } = require("express");

const router = Router();

router.get("/", orderController.getOrder);
router.post("/", orderController.createOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
