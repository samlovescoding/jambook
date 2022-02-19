import type { NextApiRequest, NextApiResponse } from 'next';
import Database from 'server/services/database';
import bcrypt from 'bcrypt';
import handler from 'server/services/handler';

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const userAlreadyExists = await Database.User.findOne({
    $or: [{ username }, { email }],
  });
  if (userAlreadyExists) {
    res.status(500).json({ message: 'Email or Username already exists.' });
    return;
  }
  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = new Database.User({
    name,
    username,
    email,
    password: encryptedPassword,
  });

  await user.save();

  res.status(200).json({ message: 'You are registered!', success: true });
});

export default handler;
