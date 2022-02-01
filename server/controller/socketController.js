import User from '../model/User.js';
import Message from '../model/Message.js';

export const userIoConnect = async (uid) => {
  const existsUser = await User.findById(uid);
  existsUser.online = true;
  await existsUser.save();
  return existsUser;
};

export const userIoDisconnect = async (uid) => {
  const existsUser = await User.findById(uid);
  existsUser.online = false;
  await existsUser.save();
  return existsUser;
};

export const getAllUsers = async () => {
  const users = await User.find().sort('-online');
  return users;
};

export const saveMessage = async (payload) => {
  try {
    const newMessage = new Message(payload);
    const message = await newMessage.save();
    return {
      ok: true,
      data: message,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: error,
    };
  }
};
