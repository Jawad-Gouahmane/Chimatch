const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected succefully ')
    } catch (error) {
        console.log(error);
    }
}

module.exports = { dbConnect }