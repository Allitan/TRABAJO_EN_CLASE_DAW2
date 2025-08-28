const express = require('express')
const sequelize = require('./Conexion/database')
const Product_v6 = require('./Modelos/Products')

const app = express();

app.use(express.json());

app.get('', async (req, res) => {

    try{

    }catch(error){
        res.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }

})

app.get('', async (req, res) => {
    
    try{

    }catch(error){
        res.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }
})

app.get('', async (req, res) => {
        
    try{

    }catch(error){
        res.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }
})

app.listen(5000, () => {
    console.log('Aplicacion iniciada en puerto 5000')
})