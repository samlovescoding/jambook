import Mongoose from 'mongoose';
import Role from 'models/roles';
import User from 'models/user';

Mongoose.connect(process.env.MONGODB_URI as string);

const Database = { User, Role };

export default Database;
