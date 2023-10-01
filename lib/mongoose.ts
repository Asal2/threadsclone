import mongoose from 'mongoose';

let isConnected = false; // to check if the database is connected or not.

export const connectToDB = async () => {
    mongoose.set('strictQuery', true) // to prevent unknow field queries

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log("Connected to MongoDB");
    
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true
        console.log('connected to database')
    } catch (error) {
        console.log(error)
    }
}