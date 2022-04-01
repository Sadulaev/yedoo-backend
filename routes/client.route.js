const { clientController } = require("../controllers/client.controller");
import authMiddleware from "../middleware/auth.middleware";

const { Router } = require("express");

const router = Router();

router.get("/", clientController.getAllClients);
router.post("/signup", clientController.signUpClient);
router.delete("/",authMiddleware, clientController.deleteClient);

module.exports = router;
