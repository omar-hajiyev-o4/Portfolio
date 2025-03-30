import express from "express";
import { addNewUser } from "../controllers/SubscriptionController.js";

const router = express.Router();
router.post('/', addNewUser);

export default router;



// import express from 'express';
// import { addNewUser } from '../controllers/SubscriptionController.js';

// const SubscriptionRouter = express.Router();

// SubscriptionRouter.route('/')
// .post(addNewUser);

// export default SubscriptionRouter;