import {connectDB} from './db.js'
import {PORT} from './config.js'
import app from './app.js'

app.listen(PORT)
connectDB()

console.log('Servidor corriendo en puerto', PORT)
