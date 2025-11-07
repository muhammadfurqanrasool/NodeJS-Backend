import { model, Schema } from "mongoose";

const User = new Schema({
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    cart :{
        type: [Schema.Types.ObjectId],
        ref: "Product",
        default: []
    },
    orders: {
        type: [Schema.Types.ObjectId],
        ref: "Order",
        default: []
    }
}, {timestamps: true})

export default model("User", User);