const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
require('dotenv/config')
//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Configuracion claves firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhVsN13K5wl1iIiUTBkow_F1IRiIXwync",
    authDomain: "backuts3.firebaseapp.com",
    projectId: "backuts3",
    storageBucket: "backuts3.appspot.com",
    messagingSenderId: "524129989241",
    appId: "1:524129989241:web:887e9bbe28b1673c81daa8"
  };
//Inicializar la BD
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()
//Inicializar el servidor
const app = express()

//Configuracion CORS
const corsOptions = {
    "Origin": "*",
    "optionSuccessStatus": 200
}

app.use(express.json())
app.use(sors(corsOptions))
//Configuracion Rutas

//Ruta para insertar un nuevo registro
app.post('/insert', (req, res) => {
    
})

//Ruta para leer o traer todos los datos de una coleccion
app.get('/getall', (req, res) => {

})
//Ruta para crear
app.post('/create', (req, res) => {
    const { name, aparterno, amaterno, direccion, telefono, ciudad, estado, email} = req.body

    //Validacion de los datos
    if (nombre.length < 3) {
        res.json({ 'alert': 'El nombre debe tener minimo 3 caracteres'})
    }
})
//Ruta para leer o atraer todos los datos de una coleccion
app.get('/read', (req, res) => {

})
// Ruta para actualizar un registro de coleccion
app.post('/update', (req, res) => {

})
// Ruta para borrar un registro de la coleccion
app.post('/delete', (req, res) => {

})
//Poner servidor en escucha
const PORT = process.env.PORT || 20000

app.listen(PORT, () => {
    console.log(´Escuchando en el puerto: ${PORT}´)
})