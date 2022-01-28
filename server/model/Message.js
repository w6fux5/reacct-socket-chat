import pkg from 'mongoose';

const { Schema, model } = pkg;

const messageSchema = Schema(
  {
    messageFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    messageTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

messageSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

const Message = model('Message', messageSchema);

export default Message;
