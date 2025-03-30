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

const vercelHandler = app;

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`Local server running on port ${PORT}`));
}

export default vercelHandler;

// import { config as configDotenv } from "dotenv";
// import express from "express";
// import cors from "cors";
// import EmailRouter from "./routers/EmailRouter.js";
// import SubscriptionRouter from "./routers/SubscriptionRouter.js";
// import { mongoDbConfig } from "./config/mongoDbConfig.js";

// configDotenv();
// const app = express();
// app.use(cors('*')) ;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// mongoDbConfig();

// //endpoints
// app.use("/email", EmailRouter);
// app.use("/subscription", SubscriptionRouter);

// app.listen(8080, () => {
//     console.log('Project backend is running....')
// })