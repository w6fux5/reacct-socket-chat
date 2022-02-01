import Message from '../model/Message.js';

export const getMessageList = async (req, res) => {
  const from = req.uid;
  const to = req.params.to;

  const last30 = await Message.find({
    $or: [
      { messageFrom: from, messageTo: to },
      { messageFrom: to, messageTo: from },
    ],
  })
    .sort({ createdAt: 'desc' })
    .limit(30);

  res.json({
    ok: true,
    messages: last30,
  });
};
