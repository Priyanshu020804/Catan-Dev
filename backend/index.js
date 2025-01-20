const express = require("express");
const cors = require("cors");
const roomRoutes = require("./routes/room");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/room" , roomRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
