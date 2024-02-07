import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '69567a77efff4e49ab68bc706a61c130'
    }
})