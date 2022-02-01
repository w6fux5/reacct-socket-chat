import React from 'react';
import { timeFormat } from '../utils/helpers';

const OutgoingMessage = ({ message }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{message.message}</p>
        <span className="time_date">{timeFormat(message.createdAt)}</span>
      </div>
    </div>
  );
};

export default OutgoingMessage;
