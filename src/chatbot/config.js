import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello 🌵 Please Choose From The Following: Contact Us, Sppurt Files, Exit`),
  ],
};

export default config;