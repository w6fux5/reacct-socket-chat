import React from 'react';

import { timeFormat } from '../utils/helpers';

const IncomingMessage = ({ message }) => {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message.message}</p>
          <span className="time_date">{timeFormat(message.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
