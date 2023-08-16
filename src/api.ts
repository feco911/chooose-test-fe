import axios from 'axios';
import { apiUrl } from './config';

export const api = axios.create({
    baseURL: apiUrl,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);