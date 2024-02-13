import axios, { AxiosRequestConfig } from "axios";

const axiousInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '69567a77efff4e49ab68bc706a61c130'
    }
});


export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[];
}

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    } 

    getAll = (config: AxiosRequestConfig) => {
        return axiousInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }
}

export default APIClient;