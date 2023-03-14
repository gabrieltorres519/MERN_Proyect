import mongoose from 'mongoose'


export async function connectDB(){
    try {
        const db = await mongoose.connect('mongodb://localhost/baseMERN')
        console.log('Base de datos conectada a ', db)
    } catch (error) {
        console.log(error)
    }
}