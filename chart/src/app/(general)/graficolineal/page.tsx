'use client'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';
import { fetchPromedioCategoria } from '@/app/Services/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement);

export default function page() {
    const [charData, setCharData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            borderColor: '',
            fill: true
        }]
    });

    useEffect(() => {
        fetchPromedioCategoria()
        .then(data=> {
            const label = data.data.map((item:any)=> `${item.categoryCode}`);
            const promedio = data.data.map((item:any)=> item.Promedio);

            setCharData({
                labels:label,
                datasets:[{
                    label: 'valor promedio de productos por cada categoria',
                    data:promedio,
                    borderColor:'rgba(206, 187, 10, 1)',
                    fill:true
                }]
            })
        })
        .catch(() => alert('Ocurrio un error'))
    },[])
  return (
    <div>
        {
            charData ? (
                <div>
                    <h2>Grafico Lineal</h2>
                    <Line data={charData}></Line>
                </div>    
            )
            :
            (
                <p>Cargando Informacion...</p>
            )
        }
    </div>
  )
}
