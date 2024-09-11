import React, { useEffect, useState, useRef } from "react";
import trashicon from "../assets/Trash.png";
import editicon from "../assets/edit.png";
import usericon from "../assets/User Avatar.png";
import responseicon from "../assets/response.png";
import powericon from "../assets/BG Image.png";
import axios from "axios";

const QuportPage = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("quportMessages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  
  const bottomRef = useRef(null);
  
  // Scroll to bottom whenever messages are updated
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Save messages to localStorage whenever messages state changes
    localStorage.setItem("quportMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    setLoading(true);
    if (input.trim() !== "") {
      try {
        const response = await axios.post("http://209.97.169.231:1000/chat/quport/", {
          message: input,
        });

        setMessages(prevMessages => [
          ...prevMessages,
          { title: input, description: response.data.response }
        ]);

        setInput("");
      } catch (error) {
        console.error(
          "Error sending message:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const DeleteMessage = async () => {
    try {
      await axios.delete("http://209.97.169.231:1000/chat/quport/");
      clearChat();
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("quportMessages");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const handleEdit = (index) => {
    const messageToEdit = messages?.[index]?.title;
    setInput(messageToEdit);
  };

  const regenerate = async () => {
    const messageToEdit = messages?.[messages.length - 1]?.title;
    if (messageToEdit) {
      const concatenatedString = `${messageToEdit} Regenerate this using different words`;
  
      setGenerating(true);
      try {
        const response = await axios.post("http://209.97.169.231:1000/chat/quport/", {
          message: concatenatedString,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          { title: messageToEdit, description: response.data.response }
        ]);

        setInput("");
      } catch (error) {
        console.error(
          "Error sending message:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setGenerating(false);
      }
    }
  };

  return (
    <div className="h-screen flex font-poppin main-container">
      <div className="flex-1 flex flex-col main">
        {/* Main Chat Area */}
        <div className="flex justify-between items-center p-4">
          <p className="text-4xl font-semibold">Chat</p>
          <div className="flex-1 flex justify-end mr-44">
            <button
              onClick={() => {
                DeleteMessage();
                clearChat();
              }}
              className="flex items-center text-white bg-red-600 font-semibold px-4 py-2 rounded-lg w-auto space-x-2 cursor-pointer">
              <span className="text-xl">
                <img src={trashicon} alt="Trash Icon" className="w-5 h-5" />
              </span>
              <span>Remove Chat</span>
            </button>
          </div>
        </div>

        <div
          className="flex-1 p-6 shadow-sm mr-12"
          style={{ marginLeft: "-30px" }}
        >
          <div className="flex">
            {messages.length > 0 && (
              <div>
                <img src={usericon} className="w-36 h-36" alt="User Icon" />
              </div>
            )}
            <div className="w-full max-w-6xl mx-auto -ml-3">
              {messages.length > 0 ? messages.map((message, index) => (
                <>
                  <div className="flex items-center space-x-4 mb-4" key={index}>
                    <div className="flex justify-between items-center p-4 rounded-lg border border-gray-200 shadow-sm w-full">
                      <h2 className="text-xl font-bold">{message.title}</h2>
                      <div>
                        <img
                          onClick={() => handleEdit(index)}
                          src={editicon} className="w-6 h-6 cursor-pointer" alt="Edit Icon" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg mb-6 shadow-lg">
                    <div className="rounded-lg shadow-md p-4">
                      <p className="text-gray-600 text-lg pb-2">
                        {message.description}
                      </p>
                    </div>
                  </div>
                </>
              )) : (
                <div className="flex justify-center">
                  <img src={powericon} alt="Response Icon" />
                </div>
              )}
              {/* Dummy div to scroll into view */}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Regenerate Response */}
          {messages.length > 0 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={regenerate}
                disabled={generating}
                className="flex justify-center items-center border border-gray-300 px-6 py-4 rounded-full space-x-3 cursor-pointer">
                <img src={responseicon} alt="Response Icon" className="pr-2"/>
                {generating ? "Generating..." : "Regenerate Response"}
              </button>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-16">
          <p className="text-3xl font-bold mr-4">QU-Chat</p>
          <input
            type="text"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
            className="flex-1 border border-gray-300 rounded-full px-4 py-6 shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="ml-4 bg-blue-700 text-white px-20 py-6 rounded-full shadow-lg cursor-pointer"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuportPage;
