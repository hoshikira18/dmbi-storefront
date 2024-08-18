import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const BASE_URL =
    `${process.env.NEXT_PUBLIC_BASE_URL}/store` ||
    'http://localhost:9000/store';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const instance = axios.create({
    baseURL: BASE_URL,
});

export const axiosInstance = setupCache(instance);
