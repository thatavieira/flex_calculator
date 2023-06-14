import { BASE_URL } from './urls';
import API from './webapi.services';

// requisição para registrar-se
export const register = async (param) => {
    try {
        return await API.post(`${BASE_URL}/register`, param).them(
            response => {
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

// requisição para login
export const login = async (param) => {
    try {
        return await API.post(`${BASE_URL}/login`, param).then(
            response => {
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}