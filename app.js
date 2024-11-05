// app.js
const express = require("express");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", messageRoutes); // Use the message routes under /api path

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
