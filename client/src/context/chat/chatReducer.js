import types from '../types';

const initialState = {
  uid: '',
  chatActive: null,
  users: [],
  messages: [],
};

const chatReducer = (state, action) => {
  switch (action.type) {
    case types.SET_USER_LIST:
      return {
        ...state,
        users: action.payload,
      };

    case types.SET_ACTIVE_CHAT:
      if (state.chatActive === action.payload) {
        return state;
      }
      return {
        ...state,
        chatActive: action.payload,
        messages: [],
      };

    case types.SET_MESSAGE_LIST:
      const messageToAndFrom = [
        action.payload.messageFrom,
        action.payload.messageTo,
      ];
      if (messageToAndFrom.includes(state.chatActive)) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      }
      return state;

    case types.SET_MESSAGE:
      return {
        ...state,
        messages: [...action.payload],
      };

    case types.CLEAR_STATUS:
      return initialState;
    default:
      return state;
  }
};

export default chatReducer;
