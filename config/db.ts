import mongoose from 'mongoose';

const dbConnect= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('CONNECTED TO MONGO DB ^^');
    }catch (error){
        console.log('FAILED TO CONNECT TO MONGO DB ):');
        process.exit(1);
    }
}
export default dbConnect;