// src/pages/ChatbotPage.tsx

import React, { useState } from "react";
import axios from "axios";
import "./ChatbotPage.css";

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, `You: ${userMessage}`]);
    setInput("");

    try {
      // Replace with your Dialogflow endpoint and token
      const response = await axios.post(
        "YOUR_DIALOGFLOW_WEBHOOK_URL",
        { message: userMessage }
      );

      const botResponse = `Buddy: ${response.data.reply}`;
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        "Buddy: Sorry, I couldn’t process that right now 🥲",
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <h2>AI Blood Buddy Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
