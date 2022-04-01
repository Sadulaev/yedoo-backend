const { Router } = require("express");

const router = Router();

router.use("/cafe", require("./cafe.route"));
router.use("/cart", require("./cart.route"));
router.use("/food", require("./food.route"));
router.use("/category", require("./category.route"));
router.use("/order", require("./order.route"));
router.use("/client", require("./client.route"));

module.exports = router;
