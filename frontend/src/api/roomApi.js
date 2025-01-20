const BASE_URL = "http://localhost:5000/room";

export const createRoom = async () => {
  const response = await fetch(`${BASE_URL}/create-room`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error creating room");
  }

  return await response.json();
};

export const joinRoom = async (roomName) => {
  const response = await fetch(`${BASE_URL}/join-room`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roomName }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error joining room");
  }

  return await response.json();
};
