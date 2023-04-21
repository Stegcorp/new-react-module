import axiosService from "./axios.service";
import {urls} from "../configs/urls";

const commentsService ={
    allGets:()=> axiosService.get(urls.comments)
}

export {
    commentsService
}
