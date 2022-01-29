import React from 'react';

import MessageHistory from './MessageHistory';
import MessageInput from './MessageInput';

const Message = () => {
  return (
    <div className="mesgs">
      <MessageHistory />
      <MessageInput />
    </div>
  );
};

export default Message;
