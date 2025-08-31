const express = require('express')
const sequelize = require('./Conexion/database')
const Product_v6 = require('./Modelos/Products')
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());

//SELECT valueCurrency AS 'Moneda', COUNT(*) FROM product_v6 group by valueCurrency;
app.get('/contar-numero-productos-moneda', async (req, res) => {

    try{
        const resultado = await Product_v6.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('COUNT', sequelize.col('*')), 'Productos']
            ],
            group: ['valueCurrency']
        });

        if(resultado.length > 0){
            res.json({'Mensaje': 'Datos encontrados', data: resultado})
        }else{
            res.status(400).json({'Mensaje': 'Datos no encontrados', data: []})
        }
    }catch(error){
        res.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }

})

// SELECT valueCurrency AS 'Moneda', AVG(value) AS 'Promedio' FROM product_v6 GROUP BY valueCurrency;
app.get('/valor-promedio-de-los-productos-por-moneda', async (req, res) => {
    
    try{
        const resultado = await Product_v6.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('AVG', sequelize.col('value')), 'Promedio']
            ],
            group: ['valueCurrency']
        });

        if(resultado.length>0){
            res.json({'Mensaje': 'Datos Encontrados', data: resultado})
        }else{
            res.status(400).json({'Mensaje': 'Datos No Encontados', data: []})
        }
    }catch(error){
        res.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }
})

//SELECT categoryCode AS 'Categoria', AVG(value) AS 'Promedio' FROM product_v6 GROUP BY categoryCode;
app.get('/Calcular-el-valor-promedio-de-productos-por-cada-categoryCode', async (req, res) => {
        
    try{
        const resultado = await Product_v6.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'Promedio']
            ],
            group: ['categoryCode']
        });

        if(resultado.length>0){
            res.json({'Mensaje': 'Datos Encontrados', data: resultado})
        }else{
            res.status(400).json({'Mensaje': 'Datos no Encontrados', data: []})
        }
    }catch(error){
        res.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }
})

app.listen(5000, () => {
    console.log(`Aplicacion iniciada en puerto localhost:${5000}`)
})