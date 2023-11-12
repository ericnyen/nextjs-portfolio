"use client";
// components/WatsonChat.js
import { useEffect } from 'react';

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: 'cb2f5ae1-717c-472e-9e33-76d564654b4c',
      region: 'us-south',
      serviceInstanceID: '7ed68b49-7c7c-429d-bbf3-ff76ca66896d',
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`;

    document.head.appendChild(script);
  }, []);

  return <div id="watson-assistant-chat-container" />;
};

export default WatsonChat;
