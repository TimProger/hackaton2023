import axios from "axios";

export const API_BASE_URL = "http://indatasecure.ru:81/";
export const APP_BASE_URL = `http://localhost:3000`

const $api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        common: {
            accept: 'application/json'
        }
    }
});

export { $api };