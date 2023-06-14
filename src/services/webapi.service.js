import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios';

//Axios = é um cliente HTTP Features ex: faz xmlHttpRequests do navegador, requisições http do node.js, suporta a API de Promessas.

const onRequest = async (config) => {
    const token = await AsyncStorage.getItem('@TOKEN_KEY');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

const setupInterceptorsTo = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest);
    return axiosInstance;
}

const API = axios.create();
setupInterceptorsTo(API);
export default API;
