import React, { useContext } from 'react';

import SideBarChatItem from './SideBarChatItem';

import { ChatContext } from '../context/chat/ChatContext';
import { AuthContext } from '../auth/AuthContext';

const SideBar = () => {
  const { chatState } = useContext(ChatContext);
  const { users } = chatState || {};

  const { authState } = useContext(AuthContext);
  const { uid } = authState || {};

  return (
    <div className="inbox_chat">
      {users
        ?.filter((user) => user.uid !== uid)
        ?.map((user) => (
          <SideBarChatItem key={user.uid} user={user} />
        ))}
      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};

export default SideBar;
