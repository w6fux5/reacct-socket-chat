import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';

const MessageItem = ({ message, uid }) => {
  const { messageTo } = message || {};
  return (
    <>
      {messageTo === uid ? (
        <IncomingMessage message={message} />
      ) : (
        <OutgoingMessage message={message} />
      )}
    </>
  );
};

export default MessageItem;
