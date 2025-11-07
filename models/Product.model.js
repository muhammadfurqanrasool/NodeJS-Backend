import {model, Schema} from "mongoose";


const Product = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: false,
        default: ""
    },
    imageURL: {
        type:String,
        required: false,
        default: ""
    },
    quantity: {
        type:Number,
        required:true,
    }
}, {timestamps:true});

export default model("Product", Product);