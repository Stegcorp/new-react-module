import axiosService from "./axios.service";
import {urls} from "../configs/urls";


const albamsService={
    allGets:()=>axiosService.get(urls.albams)
}

export {
    albamsService
}
