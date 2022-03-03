const express = require("express");
const { chats } = require("./data/data");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// connecttion with databse
connectDB();

app.get("/", async (req, res) => {
  try {
    res.send("server is running");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

// rotues
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// app.use(notFound);
// app.use(errorHandler);

app.listen(5000, () => {
  console.log("listening on port  5000");
});
