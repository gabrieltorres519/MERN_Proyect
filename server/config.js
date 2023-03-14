import dotenv from 'dotenv'

dotenv.config()

export const MONGOOD_URI = process.env.MONGOOD_URI || 'mongodb://localhost/baseMERN'
export const PORT = process.env.PORT