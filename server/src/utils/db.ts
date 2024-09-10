// init 3 users
import { User } from '../models/user.model';
import { connectDatabase } from './connection';
connectDatabase();
let exists = await User.exists({});
if (exists) {
    console.log('Users already exist');

}else {
  let u1 = new User({name: 'Alice'});
  let u2 = new User({name: 'Bob'});
  let u3 = new User({name: 'Charlie'});
  await u1.save();
  await u2.save();
  await u3.save();
  console.log('3 users created');
}
