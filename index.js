import express from 'express'
import { conn } from './src/config/database.js'
import { Usuarios } from './src/models/ModelUsuario.js'
import { Matricula } from './src/models/ModelMatricula.js'
import { Curso } from './src/models/ModelCurso.js'

const app = express()

const PORT = 3000
const SERVER = "http://localhost:"
const URL = SERVER + PORT

app.listen(PORT, () => {
    console.log("Servidor funcionando de forma correcta. URL: " + URL)
})

conn.authenticate()
    .then(()=> {
        return conn.sync()
    })
    .then(() => console.log("Conexión establecida..."))
    .catch((error) => console.log(error))


    