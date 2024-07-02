import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Bot.css';

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const messageEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=API_KEY`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          prompt: {
            text: input
          }
        },
      });

      const data = response.data;
      console.log('API Response:', data);

      const botMessage = { sender: 'bot', text: data.choices[0].text }; // Adapt to Gemini API response structure
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error.response || error.message);
      const errorMessage = { sender: 'bot', text: 'Sorry, there was an error processing your request.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="gemini-chatbot">
      <div className={`chat-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        <img src="https://cdn-icons-png.flaticon.com/512/742/742751.png" alt="Chat Icon" />
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>ElderBuddy</h4>
            <button onClick={toggleChat} className="close-button">×</button>
          </div>
          <div className="chat-body">
            {messages.map((message, index) => (
              <p key={index} className={`message ${message.sender}`}>
                {message.text}
              </p>
            ))}
            <div ref={messageEndRef} />
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
