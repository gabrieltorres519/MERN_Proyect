import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{ 
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    }, 
    image: {
        url: String,
        public_id: String
    }
})

export default mongoose.model('Post', postSchema) // Se debe exportar el modelo con un nombre que le queramos poner a la colección

