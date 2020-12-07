import axios, { AxiosResponse } from "axios";
import { Constants } from "../constants/Constant";

const BASE_URL = 'https://dev.teledirectasia.com:3092'
const instance = axios.create({
    baseURL: BASE_URL
});

// Alter defaults after instance has been created
// instance.defaults.headers.common["Content-Type"] = "";
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(Constants.TOKEN);
        console.log('token', token)
        const customHeaders = {};
        if (token) {
            customHeaders.Authorization = `Bearer ${token}`;
        };

        const headers = { ...config.headers, ...customHeaders };
        config.headers = headers;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export const http = instance;