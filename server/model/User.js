import pkg from 'mongoose';
const { Schema, model } = pkg;

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

userSchema.method('toJSON', function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

const User = model('User', userSchema);

export default User;
