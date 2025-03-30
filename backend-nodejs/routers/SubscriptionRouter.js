import express from "express";
import { addNewUser } from "../controllers/SubscriptionController.js";

const router = express.Router();
router.post('/', addNewUser);

export default router;