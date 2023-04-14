import baseURL from "../constans/urls";
import axios from "axios";

const axiosService=axios.create({baseURL})

export {axiosService}
