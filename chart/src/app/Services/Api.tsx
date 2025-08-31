import axios from "axios";

const API_URL="http://localhost:5000";

export async function fetchProductosMoneda(){
    const response= await axios.get(`${API_URL}/contar-numero-productos-moneda`);
    return response.data;
}

export async function fetchPromedioProductos(){
    const response=await axios.get(`${API_URL}/valor-promedio-de-los-productos-por-moneda`);
    return  response.data;
}

export async function fetchPromedioCategoria(){
    const response=await axios.get(`${API_URL}/Calcular-el-valor-promedio-de-productos-por-cada-categoryCode`);
    return  response.data;
}