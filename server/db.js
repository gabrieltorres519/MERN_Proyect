import mongoose from 'mongoose'
import {MONGOOD_URI} from './config.js'

export async function connectDB(){
    try {
        const db = await mongoose.connect(MONGOOD_URI)
        console.log('Base de datos conectada a ', db.connect.name)
    } catch (error) {
        console.log(error)
    }
}