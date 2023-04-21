import axiosService from "./axios.service";
import {urls} from "../configs/urls";


const postsService={
    postById:(id)=> axiosService.get(urls.posts+'/'+id)
}

export {
    postsService
}
