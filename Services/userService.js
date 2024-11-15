const User = require('../models/User'); // Assuming a User model is defined

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const updateUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  if (!user) throw new Error('User not found');
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) throw new Error('User not found');
  return user;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  return user;
};

const getAllUsers = async () => {
  return await User.find();
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
};
