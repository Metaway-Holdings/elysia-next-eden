//Connect mongoose to the database
import mongoose from 'mongoose';

export function connectDatabase() {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/elysia';
     mongoose.connect(uri, {}).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error(err);
    });
}

