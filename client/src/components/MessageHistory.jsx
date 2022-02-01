import React, { useContext } from 'react';
import MessageItem from './MessageItem';

import { ChatContext } from '../context/chat/ChatContext';
import { AuthContext } from '../auth/AuthContext';

const MessageHistory = () => {
  const { chatState } = useContext(ChatContext);
  const { authState } = useContext(AuthContext);

  const { uid } = authState || {};

  const { messages } = chatState || {};
  return (
    <div id="message-container" className="msg_history">
      {messages?.map((message) => (
        <MessageItem key={message.uid} message={message} uid={uid} />
      ))}
    </div>
  );
};

export default MessageHistory;
