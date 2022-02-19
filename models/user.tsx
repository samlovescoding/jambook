import { Schema, model, Types, models } from 'mongoose';

const schema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: Types.ObjectId,
      ref: 'role',
    },
  ],
});

let User;

if (models.user) {
  User = model('user');
} else {
  User = model('user', schema);
}

export default User;
