import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import posts from "./routes/Posts.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true}));

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        sucess: false,
        status,
        message
    });
});

app.use("/api/post/", posts);

// default get
app.get('/', async (req, res) => {
    res.status(200).json({
        message: "hello Devs...",
    });
});

// connect to db
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => {
        console.error("Failed to connect to databse");
        console.error(err);
    })
}

// Server staring function
const startServer = async () => {
    try{
        connectDB();
        app.listen(8080, () => console.log("Server started"));
    } catch(error){
        console.log(error);
    }
};

startServer();