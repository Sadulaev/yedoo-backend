const { clientController } = require("../controllers/client.controller");
const authMiddleware = require("../middleware/auth.middleware");

const { Router } = require("express");

const router = Router();

router.get("/", clientController.getAllClients);
router.get('/:id', clientController.getOneClient);
router.post("/signup", clientController.signUpClient);
// router.post("/signin", clientController.signIn);
router.delete("/", authMiddleware, clientController.deleteClient);

module.exports = router;
