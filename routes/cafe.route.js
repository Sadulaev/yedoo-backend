const { cafeController } = require("../controllers/cafe.controller");
const { Router } = require("express");
import authMiddleware from "../middleware/auth.middleware";
import { route } from "./category.route";

const router = Router();

router.get("/", cafeController.getAllCafe);
router.post("/", cafeController.createCafe);
router.delete("/:id", authMiddleware, cafeController.deleteCafe);
route.post("/signup", cafeController.signUp);

module.exports = router;
