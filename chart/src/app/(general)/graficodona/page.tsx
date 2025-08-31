'use client'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import { fetchPromedioProductos } from '@/app/Services/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);

export default function page() {

    const [charData, setCharData] = useState({
        labels: [],
        datasets: [{
            label:'',
            data:[],
            backgroundColor:[] as any[]
        }]
    });
    useEffect(() => {
    fetchPromedioProductos()
    .then(data=>{
        const label = data.data.map((item:any) => `${item.valueCurrency}`);
        const promedios = data.data.map((item:any) => item.Promedio);

        setCharData({
            labels:label,
            datasets:[{
                label: 'promedio de los productos por moneda',
                data:promedios,
                backgroundColor:['rgba(220, 9, 55, 0.2)']
            }]
        })
    })
    .catch(()=> alert('Ocurrio un error'))
    },[])
  return (
    <div>
        {
            charData ? (
                <div>
                    <h2>Grafico de Dona</h2>
                    <Pie data={charData}></Pie>
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
