const { clientController } = require("../controllers/client.controller");

const { Router } = require("express");

const router = Router();

router.get("/", clientController.getAllClients);
router.post("/", clientController.createClient);
router.delete("/", clientController.deleteClient);

module.exports = router;
