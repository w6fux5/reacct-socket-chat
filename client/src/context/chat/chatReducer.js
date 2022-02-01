import types from '../types';

const chatReducer = (state, action) => {
  switch (action.type) {
    case types.SET_USER_LIST:
      return {
        ...state,
        users: action.payload,
      };

    case types.SET_ACTIVE_CHAT:
      return {
        ...state,
        chatActive: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
