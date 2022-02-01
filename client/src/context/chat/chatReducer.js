import types from '../types';

const chatReducer = (state, action) => {
  switch (action.type) {
    case types.SET_USER_LIST:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
