const mongoose = require("mongoose")

mongoose.set('strictQuery', true);
const connectDB = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI,()=>{
            console.log('monogodb connected');
        })
    } catch (error) {
        console.log('err');
        process.exit(1);
    }
    

}

module.exports=connectDB