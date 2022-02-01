import React, { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import types from '../context/types';

const SideBarChatItem = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActive } = chatState || {};
  const onClick = () => {
    dispatch({
      type: types.SET_ACTIVE_CHAT,
      payload: user.uid,
    });
  };
  return (
    <div
      className={`chat_list ${user.uid === chatActive && 'active_chat'}`}
      onClick={onClick}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarChatItem;
