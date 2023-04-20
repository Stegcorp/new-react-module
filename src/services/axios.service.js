import axios from "axios"
import {carsBaseURL, placeBaseURL} from "../configs/urls";

const carAxiosService = axios.create({baseURL:carsBaseURL});
const placeAxiosService = axios.create({baseURL:placeBaseURL});

export {
    carAxiosService,
    placeAxiosService
}
