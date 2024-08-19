import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatPage2 = () => {
  // Initialize messages state with data from localStorage or an empty array
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("chatMessagesPadel");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    // Save messages to localStorage whenever messages state changes
    localStorage.setItem("chatMessagesPadel", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() !== "") {
      try {
        const response = await axios.post("http://209.97.169.231:1000/chat/padel/", {
          message: input,
        });

        // Update the message list with user message and bot response
        setMessages([
          ...messages,
          { type: "user", text: input },
          { type: "bot", text: response.data.response },
        ]);

        setInput("");
      } catch (error) {
        console.error(
          "Error sending message:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };
  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">PADEL AI</h1>
        <button
          onClick={clearChat}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Remove Chat
        </button>
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
          onKeyDown={handleKeyDown} 
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

export default ChatPage2;
