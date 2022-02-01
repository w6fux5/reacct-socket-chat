import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import types from '../context/types';

const SearchBox = () => {
  const { authState, logout } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleClick = () => {
    logout();
    dispatch({
      type: types.CLEAR_STATUS,
    });
  };
  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{authState?.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button
            type="button"
            onClick={handleClick}
            className="btn text-danger"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
