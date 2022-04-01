const { cafeController } = require("../controllers/cafe.controller");
const { Router } = require("express");
import authMiddleware from "../middleware/auth.middleware";
import { route } from "./category.route";

const router = Router();

router.get("/", cafeController.getAllCafe);
router.post("/signup", cafeController.signUpCafe);
router.delete("/:id", authMiddleware, cafeController.deleteCafe);

module.exports = router;
