// app.js
const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = 3030;

// Enable CORS for all routes
app.use(cors());

// You can customize CORS if needed, for example:
app.use(
    cors({
      origin: "*", // Allow requests from a specific domain
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
    })
);

app.use(express.json());
app.use("/api", messageRoutes); // Use the message routes under /api path

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
