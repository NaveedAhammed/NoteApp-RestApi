const express = require("express");
const userRouter = require("./routes/user");
const noteRouter = require("./routes/note");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Notes API From Naveed Shaik");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running at " + PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })