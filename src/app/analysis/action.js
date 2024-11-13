'use server';

import axios from "axios";

const dataPandas = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/predict/pandas');
        return response.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const dataNumpy = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/predict/numpy');
        return response.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export {dataNumpy, dataPandas}