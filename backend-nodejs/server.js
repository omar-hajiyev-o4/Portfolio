import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import emailRouter from './routers/EmailRouter.js';
import subscriptionRouter from './routers/SubscriptionRouter.js';
import connectDB from './config/mongoDbConfig.js';

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/email', emailRouter);
app.use('/api/subscription', subscriptionRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Local server running on port ${PORT}`));

export default app;