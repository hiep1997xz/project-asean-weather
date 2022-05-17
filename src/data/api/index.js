import axios from "axios";

const axiosType = {
    WA : "[WEB] WA",
    BE : "[BACK-END] BE",
}

const apiKey = "effc8583cba94b22b7b32127212204";

const baseUrlWA = "https://api.weatherapi.com/v1";
const baseUrlBE = "https://asean-weather-api.herokuapp.com/api/v1";

// Khởi tạo parameters để get kèm param (lang, key, id, q, aqi, ...)
let parameters = {
    lang: "vi",
    key: apiKey,
};

// Tạo một cổng lựa chọn api nào
// nếu param là WA thì gọi call dữ liệu
// nếu là BE thì gọi từ Back end
const axiosClient = (id) => {
    switch(id) {
        case axiosType.WA:
            return getAxiosClient(baseUrlWA);
        case axiosType.BE:
            return getAxiosClient(baseUrlBE);
        default:
            return null;
    }
    
}

const getAxiosClient = baseURL => {
    const axiosClient = axios.create({
        baseURL: baseURL,
        responseType: "json",
    })
    axiosClient.interceptors.request.use(async config=>{
        //Handle token ....
        // Nếu token có thì tự đính kèm
        
        return config;
    })
    
    axiosClient.interceptors.response.use(response=>{
        if(response && response.data !== undefined){
            return response.data;
        }
        return response.data;
    }, err =>{
        if (err.response) {
            throw err.response
        } else if (err.request) {
            throw err.request
        } else {
        throw err
        }
    })
    return axiosClient;
}





export  {axiosClient, axiosType, parameters};