import React, { useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() !== "") {
      try {
        // Make the POST request to the API
        const response = await axios.post("http://209.97.169.231:1000/chat/quport/", {
          message: input, // Sending the message as `messagegf`
        });

        // Update the message list with user message and bot response
        setMessages([...messages,
          { type: "user", text: input },
          { type: "bot", text: response.data.response }
        ]);

        // Clear the input field
        setInput("");
      } catch (error) {
        // Log the error for debugging
        console.error("Error sending message:", error.response ?
error.response.data : error.message);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center">
        <h1 className="text-lg font-semibold">QUPORT</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.type === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-300 text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;