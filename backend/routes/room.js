const express = require("express");
const router = express.Router();

// Mock Database for Rooms (for now, using an in-memory object)
const rooms = {};

// Function to generate a 6-digit alphanumeric room name
const generateRoomName = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let roomName = "";
  for (let i = 0; i < 6; i++) {
    roomName += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return roomName;
};

// Create Room Route
router.post("/create-room", (req, res) => {
  const roomName = generateRoomName();
  
  // Save the room (in a mock database)
  rooms[roomName] = { name: roomName };
  
  res.status(201).json({ message: "Room created successfully!", roomName });
});

// Join Room Route
router.post("/join-room", (req, res) => {
  const { roomName } = req.body;
  
  const room = rooms[roomName];
  if (!room) {
    return res.status(404).json({ error: "Room not found" });
  }
  
  res.status(200).json({ message: `Joined room ${roomName} successfully!`, room });
});

module.exports = router;
