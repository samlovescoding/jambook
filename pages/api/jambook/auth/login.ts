import Database from 'server/services/database';
import handler from 'server/services/handler';

handler.post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userExists = await Database.User.findOne({
    $or: [{ username }, { email: username }],
  });
  if (!userExists) {
    res.status(500).json({ message: 'Username or Email was not found!' });
    return;
  }

  res.status(200).json({ message: 'You are logged in!', success: true });
});

export default handler;
