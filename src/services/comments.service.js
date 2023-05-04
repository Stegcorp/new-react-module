import {placeAxiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getAll:()=>placeAxiosService.get(urls.placeAPI.comments),
    create:(comment)=>placeAxiosService.post(urls.placeAPI.comments,comment)
}

export {
    commentsService
}
