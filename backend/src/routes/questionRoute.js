import { Router } from "express";
import {
  addQuestion,
  getAllQuestions,
} from "../controllers/questionControllers.js";
import { upload } from "../multerMiddleware.js";
const router = Router();

router.route("/").get(getAllQuestions);
router.route("/add").post(upload.single("answerImg"), addQuestion);

export default router;
