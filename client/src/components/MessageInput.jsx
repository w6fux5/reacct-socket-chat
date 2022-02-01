import React, { useState, useContext } from 'react';

import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';
import { AuthContext } from '../auth/AuthContext';

const MessageInput = () => {
  const { socket } = useContext(SocketContext);

  const { authState } = useContext(AuthContext);
  const { uid } = authState || {};

  const { chatState } = useContext(ChatContext);
  const { chatActive } = chatState || {};

  const [message, setMessage] = useState('');

  const onChange = ({ target }) => {
    setMessage(target?.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    setMessage('');
    socket?.emit('message-personal', {
      messageFrom: uid,
      messageTo: chatActive,
      message,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            value={message}
            onChange={onChange}
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
