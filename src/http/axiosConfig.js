import getEnv from "../utils/helpers/getEnv";
import axios from "axios"

const satrexApi = axios.create({
    baseURL: `https://enduserapi.${getEnv()}.ir/api/v1`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-language': 'fa-IR',
        'Access-Control-Allow-Origin': '*',
    },
});


export default satrexApi