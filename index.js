import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./db/connectToDB.js";
import users from "./routes/users.route.js";
import products from "./routes/products.route.js";
import auth from "./routes/auth.route.js";




dotenv.config();

const port = Number(process.env.PORT) || 5500;

const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());


app.use("/users", users);
app.use("/products", products);
app.use("/api/auth", auth);



app.get("/", (req,res,next)=>{
    console.log("GET /");
    res.send("Working...");
})

app.listen(port, ()=>{
    console.log("Listening on PORT", port);
    connectToDatabase();
})





