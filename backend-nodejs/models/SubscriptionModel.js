import mongoose from "mongoose";

export const subscriptionSchema = mongoose.Schema({
    email:{type: String, required: true},
} , {timestamps:true});

export default mongoose.model("subscribes" , subscriptionSchema);