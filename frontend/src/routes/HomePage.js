import React, { useState } from "react";
import { createRoom, joinRoom } from "../api/roomApi";
import { useNavigate } from "react-router-dom"; // Updated for React Router v6

const Homepage = () => {
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Updated to useNavigate

  const handleCreateRoom = async () => {
    try {
      const response = await createRoom();
      setMessage(`Room created: ${response.roomName}`);
      
      // Redirect to the new room page
      navigate(`/${response.roomName}`); // Updated to use navigate
    } catch (error) {
      setMessage(error.message || "Failed to create room.");
    }
  };

  const handleJoinRoom = async () => {
    if (!roomName) {
      setMessage("Room name is required to join a room.");
      return;
    }
    try {
      const response = await joinRoom(roomName);
      setMessage(response.message);
    } catch (error) {
      setMessage(error.message || "Failed to join room.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Room Management</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleCreateRoom} style={{ padding: "5px 10px" }}>
          Create Room
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Join Room</h2>
        <input
          type="text"
          placeholder="Enter Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleJoinRoom} style={{ padding: "5px 10px" }}>
          Join Room
        </button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Homepage;
