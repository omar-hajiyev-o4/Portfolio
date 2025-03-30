import express from "express";
import { sendMail } from "../controllers/EmailController.js";

const router = express.Router();
router.post('/', sendMail);

export default router;