import React from 'react';

import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Message';
import ChatSelect from '../components/ChatSelect';

import '../css/chat.css';

const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {true ? <ChatSelect /> : <Messages />}
      </div>
    </div>
  );
};

export default ChatPage;
