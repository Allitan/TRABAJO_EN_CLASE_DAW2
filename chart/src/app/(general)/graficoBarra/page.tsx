'use client'
import React, { useEffect, useState } from 'react'
import { fetchProductosMoneda } from '@/app/Services/Api'
import { Bar } from 'react-chartjs-2'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {

    const [charData, setCharData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: ''
        }]
    });

    useEffect(() => {
        fetchProductosMoneda()
        .then(data => {

            const valueCurrencyLabel = data.data.map((item: any) => item.valueCurrency);
            const productos = data.data.map((item: any) => item.Productos);

            setCharData({
                labels: valueCurrencyLabel,
                datasets: [{
                    label: 'Numero de productos de cada tipo de moneda',
                    data: productos,
                    backgroundColor: 'rgba(10, 180, 36, 1)'
                }]
            })

        })
        .catch((error) => alert('Ocurrio un error al invocar el servicio' + error))
    }, [])
  return (
    <div>
        {
            charData ? (
                <div>
                    <h3>Grafico de barras</h3>
                    <Bar data={charData}></Bar>
                </div>
            )
            :
            <p>Cargando Informacion...</p>
        }
    </div>
  )
}
