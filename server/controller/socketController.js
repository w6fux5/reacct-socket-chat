import User from '../model/User.js';

export const userIoConnect = async (uid) => {
  const existsUser = await User.findById(uid);
  existsUser.online = true;
  existsUser.save();
  return existsUser;
};

export const userIoDisconnect = async (uid) => {
  const existsUser = await User.findById(uid);
  existsUser.online = false;
  existsUser.save();
  return existsUser;
};
