import User from '../model/User.js';

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
