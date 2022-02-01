import React, { useContext } from 'react';

import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Message';
import ChatSelect from '../components/ChatSelect';

import { ChatContext } from '../context/chat/ChatContext';

import '../css/chat.css';

const ChatPage = () => {
  const { chatState } = useContext(ChatContext);
  const { chatActive } = chatState || {};
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {chatActive ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};

export default ChatPage;
