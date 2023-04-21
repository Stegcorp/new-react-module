import axiosService from "./axios.service";
import {urls} from "../configs/urls";


const albumsService={
    allGets:()=>axiosService.get(urls.albams)
}

export {
    albumsService
}
