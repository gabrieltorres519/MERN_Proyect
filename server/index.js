import express from express

const app = express();

app.use('json')

app.listen(3000)
console.log('Servidor corriendo en puerto',3000)
