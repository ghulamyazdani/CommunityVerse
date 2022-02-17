import mongoose from 'mongoose'
const uri: any = process.env.MONGODB_URI
export const connectDB = async () => {
    try {
        const conn: any = await mongoose.connect(uri)
        console.log(`Connected to MongoDB at ${conn.connection.host}`)
    } catch (error: any) {
        console.error(error)
        process.exit(1)
    }
}
