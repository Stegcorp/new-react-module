import axios from "axios";
import {axiosService} from "./axios.service";
import {urls} from "../constans/urls";

class CommentsService {
    getAll(){
        return axiosService.get(urls.comments)
    }
}

export const commentService=new CommentsService()
