import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';

const SearchBox = () => {
  const { authState, logout } = useContext(AuthContext);
  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{authState?.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button type="button" onClick={logout} className="btn text-danger">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
