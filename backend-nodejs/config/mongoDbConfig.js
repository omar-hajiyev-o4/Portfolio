import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo DB with connected.");
    } catch (error) {
        console.log("error" , error);  
        process.exit(1);
    }
}

export default connectDB;