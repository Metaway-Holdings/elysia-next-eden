// Example User model schema
import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String
}, { timestamps: true });

export interface User {
  name: string;
}
export const User = mongoose.model<User>('User', UserSchema);
