import mongoose from "mongoose";


const mongoDBConnect = async (options = {}) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,options);
        console.log(`mongoDB connection established`);
        // mongoose.connections.on("error", (error) => {
        //     console.error("DB connection error",error)
        // })
        
    } catch (error) {
        console.error(`couldn't connect to MongoDB`,error.toString());
    }

}

export default mongoDBConnect