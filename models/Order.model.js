import {model, Schema} from "mongoose";

const Order = new Schema({
    orderBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productDetails: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
}, {timestamps: true});

export default model("Order", Order);