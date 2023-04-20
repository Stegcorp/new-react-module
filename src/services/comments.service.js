import {placeAxiosService} from "./axios.service";
import {urls} from "../configs/urls";

const commentsService={
        allComments:()=>placeAxiosService(urls.placeAPI.comments),
        create:(comment)=>placeAxiosService.post(urls.placeAPI.comments,comment)
}

export {
    commentsService
}
