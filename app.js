const express = require("express");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(express.json());

// DB connect
connectDB();

// routes
const taskRoutes = require("./Routes/TaskRoutes");
app.use("/api", taskRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log("Server started.."));