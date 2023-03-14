import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export async function connectDB(){
    try {
        const db = await mongoose.connect(process.env.MONGOOD_URI)
        console.log('Base de datos conectada a ', db.connect.name)
    } catch (error) {
        console.log(error)
    }
}